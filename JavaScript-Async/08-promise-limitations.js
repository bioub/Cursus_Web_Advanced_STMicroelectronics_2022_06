function interval(delayMs) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(delayMs);
    }, delayMs);
  });
}

async function main() {
  const delay = await interval(1000);
  console.log(delay + "ms");
}

main();

// Principale limitation des promesses
// est qu'elles ne fonctionnent que pour des systèmes ou
// le callback est appelé une fois
// OK setTimeout / KO setInterval
// OK fetch / KO Websocket
// OK readFile / KO readFileLineByLine
// KO addEventListener

// 2 système pour résoudre cette limite :
// - Observable (utilisé beaucoup dans Angular)
// via des libs comme RxJS
// dans le process de norme par le TC39
// - ES2018 Asynchronous Iteration (boucle for await (.. of ))
