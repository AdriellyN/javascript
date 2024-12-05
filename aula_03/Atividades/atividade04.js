const leia = require("readline-sync");

console.log("\nDigite sua escolha dentre as opções")

let estrutura = leia.question("\nVertebrado | Invertebrado\n");
let classificacao;
let alimentacao;

if(estrutura == "vertebrado" || estrutura == "Vertebrado" ){
    classificacao = leia.question("ave | mamifero\n");
    if(classificacao == "ave" || classificacao == "Ave"){
        alimentacao = leia.question("carnivoro | onivoro\n");
        if (alimentacao == "carnivoro" || alimentacao == "Carnivoro"){
            console.log("\nÁguia\n");
        }else if (alimentacao == "onivoro" || alimentacao == "Onivoro"){
            console.log("\nPomba\n");
        }else{
            console.log("\nOpção inválida. Comece novamente.\n");
        }
    }
    else if (classificacao == "mamifero" || classificacao == "Mamifero"){
        alimentacao = leia.question("onivoro | herbivoro\n");
        if (alimentacao == "onivoro" || alimentacao == "Onivoro"){
            console.log("\nHomem\n");
        }else if (alimentacao == "herbivoro" || alimentacao == "Herbivoro"){
            console.log("\nVaca\n");
        }else{
            console.log("\nOpção inválida. Comece novamente.\n");
            process.exit(0);
        }
    }
    else{
        console.log("\nOpção inválida. Comece novamente.\n");
    }

}else if (estrutura == "invertebrado" || estrutura == "Invertebrado"){
    classificacao = leia.question("Inseto | Anelideo\n");
    if(classificacao == "inseto" || classificacao == "Inseto"){
        alimentacao = leia.question("Hematofago | Herbivoro\n");
        if (alimentacao == "hematofago" || alimentacao == "Hematofago"){
            console.log("\nPulga\n");
        }else if (alimentacao == "herbivoro" || alimentacao == "Herbivoro"){
            console.log("\nLagarta\n");
        }else{
            console.log("\nOpção inválida. Comece novamente.\n");
            process.exit(0);
        }
    }
    else if (classificacao == "anelideo"){
        alimentacao = leia.question("Hematofago | Onivoro\n".toLowerCase());
        if (alimentacao == "hematofago" || alimentacao == "Hematofago"){
            console.log("\nSanguessuga\n");
        }else if (alimentacao == "onivoro" || alimentacao == "Onivoro"){
            console.log("\nMinhoca\n");
        }else{
            console.log("\nOpção inválida. Comece novamente.\n");
            process.exit(0);
        }
    }
    else{
        console.log("\nOpção inválida. Comece novamente.\n");
    }
}
else{
    console.log("\nOpção inválida. Comece novamente.\n");
}