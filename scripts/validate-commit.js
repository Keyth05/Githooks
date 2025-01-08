const fs = require('fs');

// El primer argumento es el archivo que contiene el mensaje del commit
const commitMsgFile = process.argv[2];

// Verificar que se ha recibido el archivo
if (!commitMsgFile) {
  console.error('No commit message file provided!');
  process.exit(1);
}

const commitMsg = fs.readFileSync(commitMsgFile, 'utf8').trim();
const commitMsgRegex = /^[A-Z]/; // Verifica si empieza con mayúscula

if (!commitMsgRegex.test(commitMsg)) {
  console.error('The commit message must start with an uppercase letter.');
  process.exit(1); // Rechaza el commit
}

console.log('Commit message is valid.');
