const fs = require('fs/promises');

// function copyPrettierRc() {
//   return fs.readFile('.prettierrc')
//     .then((buffer) => {
//       return fs.writeFile('.prettierrc.copy', buffer);
//     })
//     .then(() => {
//       console.log('Copy Done');
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// copyPrettierRc()

async function copyPrettierRc() {
  try {
    console.log('1');
    const buffer = await fs.readFile('.prettierrc');
    console.log('3 une fois le fichier lu');
    await fs.writeFile('.prettierrc.copy', buffer);
    console.log('4 une fois le fichier écrit');
    console.log('Copy Done');
  } catch (err) {
    console.log(err);
  }
}
copyPrettierRc()
console.log('2');

// async function copyPrettierRc() {
//   console.log('1');
//   const buffer = await fs.readFile('.prettierrc');
//   console.log('3 une fois le fichier lu');
//   await fs.writeFile('.prettierrc.copy', buffer);
//   console.log('4 une fois le fichier écrit');
//   console.log('Copy Done');
// }
// copyPrettierRc().catch(console.log);
// console.log('2');
