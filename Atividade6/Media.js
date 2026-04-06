let nome = prompt("Digite seu nome: ", );
let nota1 = prompt("Digite sua primeira nota:",);
let nota2 = prompt("Digite sua segunda nota",);
let nota3 = prompt("Digite sua terceira nota:",);
let nota4 = prompt("Digite sua quarta nota:",);

 var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) /4;


alert("A média aritmética das notas de " + nome + " é " + media);