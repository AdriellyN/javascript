const leia = require("readline-sync");

let matrizInt = new Array(10);
let vetorMedias = new Array(10);
let indiceAuxiliar = 0;

for (let indice = 0; indice < matrizInt.length; indice++) {
    matrizInt[indice] = Array(4);
}

for (let indiceLinha = 0; indiceLinha < matrizInt.length; indiceLinha++) {
    let soma = 0;
    for (let indiceColuna = 0; indiceColuna < matrizInt[indiceLinha].length; indiceColuna++) {
        matrizInt[indiceLinha][indiceColuna] = leia.questionFloat("Digite um numero: ");
    
        soma = soma + matrizInt[indiceLinha][indiceColuna];
    }
    media = (soma / 4).toFixed(1); 
    vetorMedias[indiceAuxiliar] = media;
    indiceAuxiliar++;
}

console.log(vetorMedias);