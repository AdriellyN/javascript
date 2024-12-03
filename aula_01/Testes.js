const leia = require('readline-sync')
let n1, n2;

n1 = leia.questionFloat("Digite o primeiro numero: ")
n2 = leia.questionFloat("Digite o segundo numero: ")

console.log("A variável N1 possui o valor: ", n1)
console.log("A variável N2 possui o valor: ", n2)

console.log("\nA soma de n1 + n2 é igual a: ", n1 + n2)
console.log("\nA subtração de n1 - n2 é igual a: ", n1 - n2)
console.log("\nA multiplicação de n1 * n2 é igual a: ", n1 * n2)
console.log("\nA divisão de n1 / n2 é igual a: ", n1 / n2)
console.log("\nA Potenciação de n1 ^ n2 é igual a: ", Math.pow(n1, n2))
console.log("\nA Raiz quadrada de n1 é igual a: ", Math.sqrt(n1))
