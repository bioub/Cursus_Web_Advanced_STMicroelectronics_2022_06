// const fs = require('fs');
// fs.readFile('.prettierrc', (err, buffer) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile('.prettierrc.copy', buffer, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('Copy Done');
//       }
//     });
//   }
// });

const fs = require('fs/promises');

// fs.readFile('.prettierrc')
//   .then((buffer) => {
//     fs.writeFile('.prettierrc.copy', buffer)
//       .then(() => {
//         console.log('Copy Done');
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

fs.readFile('.prettierrc')
  .then((buffer) => {
    return fs.writeFile('.prettierrc.copy', buffer);
  })
  .then(() => {
    console.log('Copy Done');
  })
  .catch((err) => {
    console.log(err);
  });
