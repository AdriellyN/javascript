const leia = require("readline-sync");

var saldo = 1000.00;

console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Depósito\n");

let opcao = leia.questionInt("Digite sua opcao: ");

switch(opcao){
    case 1:
        console.log(`\nOperação - Saldo \nSaldo: R$ ${saldo.toFixed(2)}\n`);
        break;
    case 2:
        console.log('\nOperação - Saque');
        let saque = leia.questionFloat("Digite o valor do saque: ");
        if(saque <= saldo){
            var novoSaldo = saldo - saque;
            console.log(`Novo saldo: R$ ${novoSaldo.toFixed(2)}\n`);
        }
        else{
            console.log('Saldo Insuficiente!\n');
        }
        break;
    case 3:
        console.log('\nOperação - Depósito');
        let deposito = leia.questionFloat("Digite o valor do deposito: ");
        novoSaldo = saldo + deposito;
        console.log(`Novo saldo: R$ ${novoSaldo.toFixed(2)} \n`);
        break;
    default:
        console.log("Operação inválida!\n")
};