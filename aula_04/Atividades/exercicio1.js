const leia = require("readline-sync");

let n1 = leia.questionInt('Digite o primeiro numero do intervalo: ');
let n2 = leia.questionInt('Digite o ultimo numero do intervalo: ');

if(n1 > n2){
    console.log('Intervalo inválido!');
    process.exit(0);
}
else{
    console.log(`No intervalo entre ${n1} e ${n2}: \n`);
    for(let i = n1; i <= n2; i++){
        if((i % 3 === 0) && (i % 5 === 0)){
            console.log(`${i} é múltiplo de 3 e 5`);
        }
    }
}