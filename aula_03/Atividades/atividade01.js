const leia = require("readline-sync");

let a = leia.questionInt("Digite o valor de A: ");
let b = leia.questionInt("Digite o valor de B: ");
let c = leia.questionInt("Digite o valor de C: ");

if ((a + b) > c)
{
    console.log(`${a} + ${b} = ${(a+b)} > ${c}`);
    console.log(`A Soma de A + B é Maior do que C`);
}else if((a + b) < c){
    console.log(`${a} + ${b} = ${(a+b)} < ${c}`);
    console.log(`A Soma de A + B é Menor do que C`);
}else{
    console.log(`${a} + ${b} = ${(a+b)} = ${c}`);
    console.log(`A Soma de A + B é Igual a C`);
}