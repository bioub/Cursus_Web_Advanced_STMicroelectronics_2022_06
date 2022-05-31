// setTimeout(() => {
//   console.log('1s');
// }, 1000);

// timeout(1000)
//   .then(() => {
//     console.log('1s');
//   });

// async function main() {
//   await timeout(1000);
//   console.log('1s');
// }

function timeout(delayMs) {
  return new Promise((resolve, reject) => {
    // ce callback est appelé au moment du new
    // ici on démarre l'opération async
    setTimeout(() => {
      // si tout se passe bien on doit appeler
      // le callback du prochain .then (ici resolve)
      // si erreur on doit appeler le cb du prochain .catch (ici reject)
      resolve();
    }, delayMs);
  });
}

setTimeout(() => {
  console.log('1s');
}, 1000);

timeout(1000)
  .then(() => {
    console.log('1s');
  });

async function main() {
  await timeout(1000);
  console.log('1s');
}

main();
