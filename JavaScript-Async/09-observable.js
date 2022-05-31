const readline = require('readline');
const fs = require('fs');
const { Observable } = require('rxjs');

function readFileLineByLine(path) {
  return new Observable((observer) => {
    const rl = readline.createInterface({
      input: fs.createReadStream(path)
    });

    rl.addListener('line', (input) => {
      observer.next(input)
    });
    rl.addListener('close', () => {
      observer.complete();
    })
  });
}

let lineNb = 0;
readFileLineByLine('.prettierrc').subscribe({
  next(line) {
    console.log((++lineNb) + ' ' + line);
  },
  error(err) {
    console.log(err);
  },
  complete() {
    console.log('Le fichier a été lu entièrement');
  }
});
