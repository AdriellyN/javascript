let nome = "Adrielly";
let profissao = "Pessoa desenvolvedora";
let salarioBruto = 3500.44;
const bonus = 0.05;

console.log("\nNome: ", nome)
console.log("\nProfissão: ", profissao)

console.log(
    'Salário Líquido: ',
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(salarioBruto + (bonus * salarioBruto)));

console.log("O salário bruto do colaborador " + nome + " é " + salarioBruto);

// Interpolação de Strings
console.log(`O salário bruto do colaborador ${nome} é ${new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(salarioBruto)}`);

