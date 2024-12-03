const leia = require('readline-sync');

let n1 = leia.questionFloat("Digite a primeira nota do aluno: ");
let n2 = leia.questionFloat("Digite a segunda nota do aluno: ");
let n3 = leia.questionFloat("Digite a terceira nota do aluno: ");
let n4 = leia.questionFloat("Digite a quarta nota do aluno: ");

let media = (n1 + n2 + n3 + n4)/4;

console.log("A média final do aluno é: ", media.toFixed(1));