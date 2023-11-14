//Desafio Classificador de nível de Herói

let nomeHeroina = "Saori"
let quantidadeXPHeroina = 9500

switch(true){
    case quantidadeXPHeroina < 1000:
        nivelHeroina = "Ferro"
        break
    case quantidadeXPHeroina >= 1001 && quantidadeXPHeroina <= 2000:
        nivelHeroina = "Bronze"
        break
    case quantidadeXPHeroina >= 2001 && quantidadeXPHeroina <= 5000:
        nivelHeroina = "Prata"
        break
    case quantidadeXPHeroina >= 6001 && quantidadeXPHeroina <= 7000:
        nivelHeroina = "Ouro"
        break
    case quantidadeXPHeroina >= 7001 && quantidadeXPHeroina <= 8000:
        nivelHeroina = "Platina"
        break
    case quantidadeXPHeroina >= 8001 && quantidadeXPHeroina <= 9000:
        nivelHeroina = "Ascendente"
        break
    case quantidadeXPHeroina >= 9001 && quantidadeXPHeroina <= 10000:
        nivelHeroina = "Imortal"
        break
    default:
        nivelHeroina = "Radiante"
        break 
}

console.log("A heroina de nome " + nomeHeroina + " está no nível de " + nivelHeroina)