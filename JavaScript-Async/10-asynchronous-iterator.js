const readline = require('readline');
const fs = require('fs');

function readFileLineByLine(path) {
  const rl = readline.createInterface({
    input: fs.createReadStream(path)
  });

  return rl;
}


async function main() {
  let lineNb = 0;
  for await (const line of readFileLineByLine('.prettierrc')) {
    console.log((++lineNb) + ' ' + line);
  }
  console.log('Le fichier a été lu');
}

main();
