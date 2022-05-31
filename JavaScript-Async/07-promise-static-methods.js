function randomAsyncValue(val) {
  const randomInt = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        delay: randomInt,
        value: val,
      });
    }, randomInt);
  });
}

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

function asyncError500ms() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Async error in 500ms'));
    }, 500);
  });
}

// randomAsyncValue('A')
//   .then((obj) => {
//     console.log(obj.value); // A
//     console.log(obj.delay); // un entier aléatoire
//   });

// async function main() {
//   const obj = await randomAsyncValue('A');
//   console.log(obj.value); // A
//   console.log(obj.delay); // un entier aléatoire
// }
// main();


// randomAsyncValue('A')
//   .then((obj) => {
//     console.log(obj.value); // A
//     console.log(obj.delay); // un entier aléatoire
//   });
// randomAsyncValue('B')
//   .then((obj) => {
//     console.log(obj.value); // B
//     console.log(obj.delay); // un entier aléatoire
//   });
// randomAsyncValue('C')
//   .then((obj) => {
//     console.log(obj.value); // C
//     console.log(obj.delay); // un entier aléatoire
//   });

// Combiner plusieurs promesses en une
// Promise.all (équivalent à un ET Logique)
// Quand toutes les opérations sont terminées et
// resolues (en succès) on récupère les résultats
// Si une opération échoue, l'ensemble échoue
// Promise.all([
//   randomAsyncValue('A'),
//   randomAsyncValue('B'),
//   randomAsyncValue('C'),
// ]).then((results) => {
//   console.log(results);
// });

// async function readAll() {
//   const results = await Promise.all([
//     randomAsyncValue('A'),
//     randomAsyncValue('B'),
//     randomAsyncValue('C'),
//   ]);
//   console.log(results);
// }
// readAll()

// Promise.allSettled
// Même chose que Promise.all mais si une promesse échoue
// on récupère tout de même le reste des retours
// Cas d'utilisation : un dashboard qui doit afficher différentes
// données, mais si un panneau n'a pas accès à ses données
// on affiche quand même le reste
// async function readAll() {
//   const results = await Promise.allSettled([
//     randomAsyncValue('A'),
//     asyncError500ms(),
//     randomAsyncValue('C'),
//   ]);
//   console.log(results);
// }
// readAll()

// Promise.race (OU logique)
// On combine plusieurs promesses, la résolution combinée
// se fait lorsque la première est résolu
// Cas d'utilisation :
// Une requête avec un timeout
// async function readFileAWith500msTimeout() {
//   try {
//     const result = await Promise.race([
//       randomAsyncValue('A'),
//       asyncError500ms(),
//     ]);

//     console.log(result);
//   } catch (error) {
//     console.log('Error : timeout 500')
//   }
// }
// readFileAWith500msTimeout();

// Promise.any
// La première promesses résolue même s'il y a une erreur avant
// Cas d'utilisation :
// Interroger 2 serveurs mirroirs en même temps
// si l'un des 2 échoue en premier on récupère le retour du 2e
async function readFileAWith500msTimeout() {
  try {
    const result = await Promise.any([
      randomAsyncValue('A'),
      asyncError500ms(),
    ]);

    console.log(result);
  } catch (error) {
    console.log('Error : timeout 500')
  }
}
readFileAWith500msTimeout();


// En général dans les tests automatisés
// Promise.resolve
// équivalent à
// new Promise((resolve) => resolve());

// En général dans les tests automatisés
// Promise.reject
// équivalent à
// new Promise((resolve, reject) => reject());
