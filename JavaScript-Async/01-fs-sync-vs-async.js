const fs = require('fs');

// Sync :
// - bloquante, tant que le fichier n'a pas été lu entièrement
// le thread reste bloqué sur fs.readFileSync
// - simple à lire et à écrire
// - gestion des erreurs centralisé via un try .. catch
try {
  const buffer = fs.readFileSync('.prettierrc');
  console.log(buffer.toString('utf-8'));
} catch (err) {
  console.log(err);
}

// Async :
// - non bloquante, le console.log('FIN') ou autre opération s'exécute
// en même temps que la lecture du fichier (perf++)
// - plus complexe à lire et à écrire (les lignes ne sont pas dans l'ordre)
// - pas de gestion centralisée des erreurs
fs.readFile('.prettierrc', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    console.log(buffer.toString('utf-8'));
  }
});

console.log('FIN');
