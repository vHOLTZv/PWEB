const fs = require('fs'); //modulo filesystem
const data = fs.readFileSync('Naruto.txt'); //execucao bloqueada ate a ser lido
console.log(data.toString());
