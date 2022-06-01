import fs from 'fs-extra';
import path from 'path';
import globby from 'globby';
import _ from 'lodash';
import sharp from 'sharp';
import imagemin, { Result } from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

process.chdir(__dirname);

interface Report {
  [key: string]: {
    name: string,
    imgPath: string,
  }[],
}

async function rmAndMkdir(): Promise<void> {
  await fs.remove('dest');
  await fs.mkdir('dest');
}

async function copyOrResizeImage(srcImgPath: string, destImgPath: string, maxWidth: number): Promise<void> {
  let image = sharp(srcImgPath);

  const { width = 0 } = await image.metadata();

  if (width > maxWidth) {
    image = image.resize({ width: maxWidth });
  }

  await image.toFile(destImgPath);
}

// function fakeGlobby(glob) {
//   return Promise.resolve(['src/Assurances/Maaf.svg']);
// }

async function copyImages(): Promise<void> {
  const srcImgPaths = await globby('src/**/*.{png,svg}');
  const report: Report = {};

  for (const srcImgPath of srcImgPaths) {
    const { name, ext, dir } = path.parse(srcImgPath);

    const segments = dir.split('/');
    const parentSegment = segments.at(-1) as string;

    const destName = _.kebabCase(_.deburr(name));
    const destImgPath = path.resolve('dest', destName) + ext;

    if (ext === '.svg') {
      await fs.copy(srcImgPath, destImgPath);
    } else {
      await copyOrResizeImage(srcImgPath, destImgPath, 300);
    }

    if (!report[parentSegment]) {
      report[parentSegment] = [];
    }

    report[parentSegment].push({
      name: name,
      imgPath: destName + ext,
    });
  }

  await fs.writeJson(path.resolve(__dirname, 'report.json'), report);
}

async function reduceImagesSize(): Promise<Result[]> {
  return await imagemin(['dest/*.{png,svg}'], {
    destination: 'dest',
    plugins: [imageminPngquant(), imageminSvgo()],
  });
}

(async function () {
  await rmAndMkdir();
  await copyImages();
  await reduceImagesSize();
})();
