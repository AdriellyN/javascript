const leia = require("readline-sync");

console.log("1 - Cachorro Quente");
console.log("2 - X-Salada");
console.log("3 - X-Bacon");
console.log("4 - Bauru");
console.log("5 - Refrigerante");
console.log("6 - Suco de laranja \n");

let codigoProduto = leia.questionInt("Digite o codigo do item: ");
let qdteComprada = leia.questionInt("Digite a quantidade comprada: ");
let valorTotalCompra;

switch(codigoProduto){
    case 1:
        valorTotalCompra = qdteComprada * 10.00;
        console.log(`Produto: Cachorro Quente \nValor total: R$ ${valorTotalCompra.toFixed(2)}`);
        break;
    case 2:
        valorTotalCompra = qdteComprada * 15.00;
        console.log(`Produto: X-Salada \nValor total: R$ ${valorTotalCompra.toFixed(2)}`);
        break;
    case 3:
        valorTotalCompra = qdteComprada * 18.00;
        console.log(`Produto: X-Bacon \nValor total: R$ ${valorTotalCompra.toFixed(2)}`);
        break;
    case 4:
        valorTotalCompra = qdteComprada * 12.00;
        console.log(`Produto: Bauru \nValor total: R$ ${valorTotalCompra.toFixed(2)}`);
        break;
    case 5:
        valorTotalCompra = qdteComprada * 8.00;
        console.log(`Produto: Refrigerante \nValor total: R$ ${valorTotalCompra.toFixed(2)}`);
        break;
    case 6:
        valorTotalCompra = qdteComprada * 13.00;
        console.log(`Produto: Suco de laranja \nValor total: R$ ${valorTotalCompra.toFixed(2)}`);
        break;
    default:
        console.log("Digite um código válido!")
}