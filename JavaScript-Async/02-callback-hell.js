const fs = require('fs');

// Sync
try {
  const buffer = fs.readFileSync('.prettierrc');
  fs.writeFileSync('.prettierrc.copy', buffer);
  console.log('Copy Done');
} catch (err) {
  console.log(err);
}

// Callback Hell / Pyramid of Doom
// Enchainer les opérations augmente l'indentation
// Pas de gestion d'erreur centralisée
fs.readFile('.prettierrc', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.prettierrc.copy', buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy Done');
      }
    })
  }
});
