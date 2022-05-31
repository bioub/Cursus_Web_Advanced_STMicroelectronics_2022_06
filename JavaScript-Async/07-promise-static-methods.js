function randomTimeout(val) {
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

// randomTimeout('A')
//   .then((obj) => {
//     console.log(obj.value); // A
//     console.log(obj.delay); // un entier aléatoire
//   });

// async function main() {
//   const obj = await randomTimeout('A');
//   console.log(obj.value); // A
//   console.log(obj.delay); // un entier aléatoire
// }
// main();


// randomTimeout('A')
//   .then((obj) => {
//     console.log(obj.value); // A
//     console.log(obj.delay); // un entier aléatoire
//   });
// randomTimeout('B')
//   .then((obj) => {
//     console.log(obj.value); // B
//     console.log(obj.delay); // un entier aléatoire
//   });
// randomTimeout('C')
//   .then((obj) => {
//     console.log(obj.value); // C
//     console.log(obj.delay); // un entier aléatoire
//   });

// Combiner plusieurs promesses en une
// Promise.all (équivalent à un ET Logique)
// Quand toutes les opérations sont terminées et
// resolues (en succès)
// on récupère les résultats
// Promise.all([
//   randomTimeout('A'),
//   randomTimeout('B'),
//   randomTimeout('C'),
// ]).then((results) => {
//   console.log(results);
// });

async function readAll() {
  const results = await Promise.all([
    randomTimeout('A'),
    randomTimeout('B'),
    randomTimeout('C'),
  ]);
  console.log(results);
}
readAll()

// Promise.race
// Promise.allSettled
// Promise.any



// En général dans les tests automatisés
// Promise.resolve
// équivalent à
// new Promise((resolve) => resolve());

// En général dans les tests automatisés
// Promise.reject
// équivalent à
// new Promise((resolve, reject) => reject());
