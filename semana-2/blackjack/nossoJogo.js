/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



confirm("Boas vindas ao jogo de Blackjack! Quer iniciar uma nova rodada?")
const valorJogador = Number()
const valorComputador = Number()
let cartasJogador = ""    //Number()
let cartasComputador = ""    //Number()
function resultado (jPerdeu, cPerdeu, empate){
   jPerdeu = "O computador ganhou!"
   cPerdeu = "Você ganhou!"
   empate = "Empate!"
}


if(true) {
	//iniciar rodada.
   cartasJogador => comprarCarta(2)
   //valorJogador = Number()
   cartasComputador => comprarCarta(1)
   //valorComputador = Number()
   
   confirm(`Suas castas são ${cartasJogador}. A carta revelada do computador é ${cartasComputador}. Deseja comprar mais cartas`)
   
   if(confirm(`Suas castas são ${cartasJogador}. A carta revelada do computador é ${cartasComputador}. Deseja comprar mais cartas`) === true){
      cartasJogador += comprarCarta(1)
      //valorJogador = Number()      
      if(valorJogador > 21){
         Alert(
            `Suas cartas são: ${cartasJogador} - Pontuação: ${valorJogador}
            Computador - Cartas: ${cartasComputador} - Pontuação: ${valorComputador}
            ${jPerdeu}`)
         //verificar
      }   
   }if(confirm(`Suas castas são ${cartasJogador}. A carta revelada do computador é ${cartasComputador}. Deseja comprar mais cartas`) === false){
      for (i=0;i<valorJogador; i++){
         cartasComputador += comprarCarta()
      }
   }  
}else {false
   // o que fazer se o usuário clicar "cancelar"
   alert("O jogo acabou!")
} 



// iniciar o jogo
// sortear 2 cartas para cada jogador
// definir a pontuação de cada jogador

// "Deseja comprar mais cartas?"

// informar o vencedor (usuário ou computador), ou empate, caso as pontuações sejam iguais.

// const carta = comprarCarta(); //arquivo naoMexer.js
// // Sorteia uma carta. Por exemplo, o rei de ouros

// console.log(carta.texto) 
// // imprime o texto da carta. Nesse caso: "K♦️"

// console.log(carta.valor) 
// // imprime o valor da carta (um número). Nesse caso: 10)

// console.log("Usuário - cartas: Q♣️ 10♣️  - pontuação 20") XXXXXXXX
// console.log("Computador - cartas: Q♣️ 10♣️  - pontuação 20") XXXXXXXX

// const resultado = (){
//    if(){

//    }if(){

//    }


// }



