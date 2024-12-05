const leia = require("readline-sync");

let nome = leia.question("Digite o nome do doador: ");
let idade = leia.questionInt("Digite a idade do doador: ");
let primeiraDoacao = leia.question("Primeira doacao de sangue? (true / false)");
let primeira;

if (primeiraDoacao == "true"){
    primeira = true;
}else if(primeiraDoacao == "false")
{
    primeira = false;
}else{
    console.log("Opção inválida!");
    process.exit(0);
}

if (idade >= 18 && idade <= 59){
    console.log(`${nome} está apto para doar sangue!`);
}else if ((idade >= 60 && idade <= 69) && (primeira == false)){
    console.log(`${nome} está apto para doar sangue!`);
}else{
    console.log(`${nome} não está apto para doar sangue!`);
}