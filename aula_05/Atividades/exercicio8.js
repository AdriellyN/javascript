const leia = require('readline-sync');

let vetorNumeros = new Array(10);
let vetorPar = new Array (5);
let vetorImpar = new Array (5);
let soma = 0;
let contadorPar = 0;
let contadorImpar = 0;

for(let i = 0; i < 10 ; i++){
    vetorNumeros[i] = leia.questionInt("Digite um numero: ");
    soma = soma + vetorNumeros[i];

    if (i % 2 !== 0){
        vetorImpar[contadorImpar] = vetorNumeros[i];
        contadorImpar++;
    }

    if (vetorNumeros[i] % 2 === 0){
        vetorPar[contadorPar] = vetorNumeros[i];
        contadorPar++;
    }
}

console.log("Elementos nos índices pares: ", vetorImpar);
console.log("Elementos pares: ", vetorPar);
console.log("Soma: ", soma);
console.log("Média: ", (soma/10));