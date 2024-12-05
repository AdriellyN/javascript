const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero: ");
let sinal;

if (numero === 0){
    console.log("numero é zero!");
    process.exit(0);
}else if (numero > 0){
    sinal = "positivo";
}else{
    sinal = "negativo";
}

if (numero % 2 == 0){
    escala = "par";
}else{
    escala = "impar"
}

console.log(`O número ${numero} é ${escala} e ${sinal}!`)