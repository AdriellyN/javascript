const leia = require('readline-sync');

let salario = leia.questionFloat("Digite o salario: ");
let abono = leia.questionFloat("Digite o abono: ");

// let novoSalario = salario + abono;

console.log(`O novo salário do colaborador é ${new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(salario + abono)}`);