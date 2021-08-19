//Aula 09 - Laços
//Exercícios de interpretação de código
// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 
//1) O que o código abaixo está fazendo? Qual o resultado impresso no console?
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

//Resposta: declara uma variavel com valor 0, enquanto i for menor que 5 ele acrescenta o valor de i ao array valor. no final ele imprime o valor final do array valor.


//2) Leia o código abaixo:
// a) O que vai ser impresso no console?
// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é 
//suficiente? Se sim, o que poderia ser usado para fazer isso?

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//Resposta A): o for vai percorrer todo o array lista, cada entrada na lista ele verifica 
//se o valor de numero é maior que 18, caso seja ele imprime no console.
//Resposta B): O for of acessa o valor do indice, para acessar o indice deveria declarar 
//o for da seguinte maneira: 
for (i=0;i<lista.length; i++){ 
    let numero = lista[i]
    console.log(numero)
    }


//3) Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

//Resposta: ira imprimir a quantidade 4 de asteristicos. que é o numero colocado pelo usuario no prompt e a quantidade atual +1



// Exercícios de escrita de código
// // 1) Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
// c) Por fim, imprima o array com os nomes dos bichinhos no console

const pergunta1 = Number(prompt("Quantos bichinhos de estimação vc tem?"))
if (pergunta1 === 0){
    console.log("Que pena! Você pode adotar um pet!")
} else if (pergunta1 >=1){
    pergunta2 = prompt("Digite o nome do seu pet:")
    nomePet = pergunta2
    console.log(nomePet)
}


// 2) Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
// a) Escreva um programa que imprime cada um dos valores do array original.
// b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
// c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
// d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original


const arrayOriginal = [1,2,3,4,5] 
for (i=0; i<arrayOriginal.length; i++){
  console.log("Exercico 2A) escrita de código:", arrayOriginal[i])     
}

for (i=0; i<arrayOriginal.length; i++){
  console.log("Exercico 2B) escrita de código:", arrayOriginal[i]/10)     
}
let soPares = []  
for (i=0; i<arrayOriginal.length; i++){
  if (arrayOriginal[i] %2 === 0 ){
      soPares.push(arrayOriginal[i])
  }
}

console.log("Exercico 2C) escrita de código:",soPares)

  //D)


 const novoArray = ["a","b","c","d"]
 for (i=0; i<novoArray.length; i++){
  console.log(`2C): O elemento do índex ${i} é: ${novoArray[i]}`)     
}

let maiorValor = arrayOriginal[0] 
for (i=0; i<arrayOriginal.length; i++){
    if (arrayOriginal[i] > maiorValor){
        maiorValor = arrayOriginal[i]
    }
}

let menorValor = arrayOriginal[0]
for (i=0; i<arrayOriginal.length; i++){
    if (arrayOriginal[i] < menorValor){
        menorValor = arrayOriginal[i]
    }
}

console.log("2D) o maior é:", maiorValor, "o menor é:", menorValor)

// let i = arrayNumeros.length[]

//     console.log("Exercico 2)B escrita de código:", arrayNumeros)


// DESAFIOS
// 1)Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
// Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:
// Vamos jogar!
// O número chutado foi: 3
// Errrrrrrrou, é maior
// O número chutado foi: 18
// Errrrrrrrou, é menor
// O número chutado foi: 15
// Errrrrrrrou, é menor
// O número chutado foi: 11
// Acertou!!
// O número de tentativas foi: 4 

// modo A)
// const numeroEscolhidoj1 = Number(prompt("Jocador 1: Escolha um numero!"))
//   console.log("Vamos jogar!")
//   let numeroEscolhidoj2 = -999
//   let tentativas = 0
//   for (;numeroEscolhidoj2 !== numeroEscolhidoj1;){
//     tentativas += 1
//     numeroEscolhidoj2 = Number(prompt("Jocador 2: Tente adivinha o numero escolhido!"))
//       if (numeroEscolhidoj2 < numeroEscolhidoj1){
//           console.log(`O número chutado foi: ${numeroEscolhidoj2}, Errou! O número escolhido é maior`)
//         } 
//       else if (numeroEscolhidoj2 > numeroEscolhidoj1){
//           console.log(`O número chutado foi: ${numeroEscolhidoj2}, Errou! O número escolhido é menor`)
//         }  
//       else if (numeroEscolhidoj2 === numeroEscolhidoj1){
//           console.log(`Acertou!!! O número de tentativas foi: ${tentativas}`)
//       }
//       console.log(`O número de tentativas foi: ${tentativas}`)
      
//     }


// modo B)

const numeroEscolhidoj1 = Number(prompt("Jocador 1: Escolha um numero!"))
console.log("Vamos jogar!")
let acertou = false
let tentativas = 0
while (!acertou){
    tentativas += 1
    numeroEscolhidoj2 = Number(prompt("Jocador 2: Tente adivinha o numero escolhido!"))
    if (numeroEscolhidoj2 < numeroEscolhidoj1){
        console.log(`O número chutado foi: ${numeroEscolhidoj2}, Errou! O número escolhido é maior`)
    } else if (numeroEscolhidoj2 > numeroEscolhidoj1){
        console.log(`O número chutado foi: ${numeroEscolhidoj2}, Errou! O número escolhido é menor`)
    } else if (numeroEscolhidoj2 === numeroEscolhidoj1){
      acertou = true  
      console.log(`Acertou!!! O número de tentativas foi: ${tentativas}`)
    }
    console.log(`O número de tentativas foi: ${tentativas}`)
    
}













