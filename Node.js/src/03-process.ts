import minimist from 'minimist';
import semver from 'semver';
// process est global (pas besoin de require ou import)

// Arguments du programme
// Pour manipuler ces args, utiliser les libs :
// minimist, yargs, commander
// voir aussi inquirer pour des commandes interactive (
// où l'on pose des question
// )
console.log(process.argv.slice(2));
const args = minimist(process.argv.slice(2));
console.log(args);

// Variables d'environnements
console.log(process.env.HTTP_PROXY);

// process.exit(0); // kill le process avec succès
// process.exit(1); // kill le process avec un code d'erreur

// équivalent à console.log
process.stdout.write('Hello\n');

console.log(process.platform);
// voir le paquet : semver
console.log(process.version);
console.log(semver.parse(process.version));
