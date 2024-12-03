const leia = require('readline-sync');

let salarioBruto = leia.questionFloat("Digite o salario bruto do colaborador: ");
let adicionalNoturno = leia.questionFloat("Digite o valor de adicional noturno do colaborador: ");
let horaExtra = leia.questionFloat("Digite o valor de hora extra do colaborador: ");
let horas = leia.questionInt("Digite a quantidade de horas extras do colaborador: ");
let descontos = leia.questionFloat("Digite o valor dos descontos do colaborador: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horaExtra*horas) - descontos;

console.log(`O salário liquido do colaborador é: ${new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(salarioLiquido)}`);