const leia = require("readline-sync");

let positivo = 0;
let numero;

do {
    numero = leia.questionInt('Digite um numero: ');

    if (numero > 0) {
        positivo = positivo + numero;
    }
} while (numero !== 0)

console.log(`A soma dos números positivos é: ${positivo}`);
