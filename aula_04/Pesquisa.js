const leia = require("readline-sync");

let idade, 
    esporte, 
    futebol = 0, 
    voleibolMaiores18 = 0, 
    basquetebolMenores18 = 0, 
    outros = 0,
    continua = 'S';

while(continua === 'S'){
    idade = leia.questionInt("Digite a sua idade: ");

    do{
        esporte = leia.questionInt("Digite o esporte favorito (1-Fut|2-Vol|3-Basq|4-Outros)\n");
        
        if (esporte < 1 || esporte > 4)
            console.log("Digite um número entre 1 e 4");
    }while(esporte < 1 || esporte > 4)

    if(esporte === 1)
        futebol++;

    if (esporte === 2 && idade >= 18){
        voleibolMaiores18++;
    }

    if (esporte === 3 && idade < 18)
        basquetebolMenores18++;

    if(esporte === 4)
        outros++;

    continua = leia.question("Deseja continuar (S/N)? ").toUpperCase();
}

console.log(`Total de pessoas que gostam de futebol: ${futebol}`)
console.log(`Total de pessoas que gostam de voleibol e são maiores de 18 anos: ${voleibolMaiores18}`)
console.log(`Total de pessoas que gostam de basquetebol e são menores de 18 anos: ${basquetebolMenores18}`)
console.log(`Total de pessoas que gostam de outros esportes: ${outros}`)