import chalk from 'chalk'; // le fichier .d.ts est dans node_modules/chalk
import _ from 'lodash'; // le fichier .d.ts a du être installé via npm (ex: yarn add @types/lodash --dev ou npm i @types/lodash -D)
import { getInt } from 'mdn-random'; // le fichier .d.ts peut être déclaré dans le dossier types (avec tsc)

console.log(chalk.blue('Hello'));
console.log(_.deburr('Bonjour à tous'));
console.log(getInt(0, 100));
