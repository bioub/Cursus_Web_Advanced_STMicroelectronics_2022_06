const fs = require('fs/promises');

async function readPrettierRc() {
  const buffer = await fs.readFile('.prettierrc');
  return buffer;
}

async function writePrettierRcCopy(buffer) {
  await fs.writeFile('.prettierrc.copy', buffer);
}

async function copyPrettierRc() {
  try {
    const buffer = await readPrettierRc();
    await writePrettierRcCopy(buffer);
    console.log('Copy Done');
  } catch (err) {
    console.log(err);
  }
}
copyPrettierRc()
