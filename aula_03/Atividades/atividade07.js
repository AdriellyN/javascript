const leia = require("readline-sync");

let n1 = leia.questionFloat("Digite o primeiro numero: ");
let n2 = leia.questionFloat("Digite o segundo numero: ");

console.log("\n               Operações               ");
console.log("|1 - Soma          | 2 - Subtração    |");
console.log("|3 - Multiplicação | 4 - Divisão      |\n");

let opcao = leia.questionInt("Digite o codigo da operacao: ");

switch(opcao){
    case 1:
        var resultado = n1 + n2;
        console.log(`${n1.toFixed(1)} + ${n2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    case 2:
        var resultado = n1 - n2;
        console.log(`${n1.toFixed(1)} - ${n2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    case 3:
        var resultado = n1 * n2;
        console.log(`${n1.toFixed(1)} * ${n2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    case 4:
        var resultado = n1 / n2;
        console.log(`${n1.toFixed(1)} / ${n2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    default:
        console.log("Operação inválida!")
};