import fs from 'fs/promises';
import path from 'path';

// Assemble les segments en relatif
console.log(path.join('..', 'Node.js', '.prettierrc'));

// Assemble les segments en absolu (dépend du CWD)
console.log(path.resolve('..', 'Node.js', '.prettierrc'));

// Si ça doit par rapport à la position du fichier
// Assemble les segments en relatif
console.log(path.join(__dirname, '..', '.prettierrc'));

// Assemble les segments en absolu (dépend du CWD)
console.log(path.resolve(__dirname, '..', '.prettierrc'));


async function main() {
  const filesPath = await fs.readdir('.');

  for (const filePath of filesPath) {
    console.log(filePath);
  }
}

main();
