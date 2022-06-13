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




// async function maFonction(cb) {
//   let val = cb(123);

//   if (val instanceof Promise) {
//     val = await val;
//   }
//   console.log(val + 1); // 124
// }

// maFonction((param) => {
//   console.log(param); // 123
//   return param;
// })

// maFonction(async (param) => {
//   console.log(param); // 123
//   return param;
// })
