const fs = require('fs/promises');
const path = require('path');
const md5 = require('md5');
const { minify } = require('terser');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function rmAndMkdir(path) {
  await fs.rm(path, { recursive: true, force: true });
  await fs.mkdir(path);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  const content = Buffer.concat(buffers).toString('utf-8');
  const checksum = md5(content);

  await fs.writeFile(appJsDistPath.replace('app.js', `app.${checksum}.js`), content);

  return checksum;
}

async function buildHtml(checksum) {
  const buffer = await fs.readFile(indexHtmlPath);

  let content = buffer.toString('utf-8');

  content = content.replace('<script src="./js/horloge.js"></script>', '')
    .replace('<script src="./js/index.js"></script>', `<script src="./app.${checksum}.js"></script>`)

  await fs.writeFile(indexHtmlDistPath, content);
}

async function build() {
  await rmAndMkdir(distPath);
  // en parallèle
  // await Promise.all([
  //   buildJs(),
  //   buildHtml(),
  // ]);
  const checksum = await buildJs();
  await buildHtml(checksum);
  console.log('Build done');
}

build();

// rmAndMkdir(distPath)
//   .then(() => buildJs())
//   .then((checksum) => buildHtml(checksum))
//   .then(() => console.log('Build done'))
