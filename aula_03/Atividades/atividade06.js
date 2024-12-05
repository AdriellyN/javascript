const leia = require("readline-sync");

let nome = leia.question("Digite o nome de colaborador: ")

console.log("               Cargos                 ");
console.log("|1 - Gerente       | 4 - Motorista    |");
console.log("|2 - Vendedor      | 5 - Estoquista   |");
console.log("|3 - Supervisor    | 6 - Técnico de TI| \n");

let codigoCargo = leia.questionInt("Digite o codigo do cargo do colaborador: ");
let salario = leia.questionFloat("Digite o salario do colaborador: ");
let salarioReajustado;

switch(codigoCargo){
    case 1:
        salarioReajustado = salario * 1.1;
        console.log(`Nome do colaborador: ${nome}\nCargo: Gerente \nSalário: R$ ${salarioReajustado.toFixed(2)}`);
        break;
    case 2:
        salarioReajustado = salario * 1.07;
        console.log(`Nome do colaborador: ${nome}\nCargo: Vendedor \nSalário: R$ ${salarioReajustado.toFixed(2)}`);
        break;
    case 3:
        salarioReajustado = salario * 1.09;
        console.log(`Nome do colaborador: ${nome}\nCargo: Supervisor \nSalário: R$ ${salarioReajustado.toFixed(2)}`);
        break;
    case 4:
        salarioReajustado = salario * 1.06;
        console.log(`Nome do colaborador: ${nome} \nCargo: Motorista \nSalário: R$ ${salarioReajustado.toFixed(2)}`);
        break;
    case 5:
        salarioReajustado = salario * 1.05;
        console.log(`Nome do colaborador: ${nome} \nCargo: Estoquista \nSalário: R$ ${salarioReajustado.toFixed(2)}`);
        break;
    case 6:
        salarioReajustado = salario * 1.08;
        console.log(`Nome do colaborador: ${nome} \nCargo: Técnico de TI \nSalário: R$ ${salarioReajustado.toFixed(2)}`);
        break;
    default:
        console.log("Digite um código válido!");
};