// Exercícios de interpretação de código
// 1) Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)
//undefined

array = null
console.log('b. ', array)
//null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//11
let i = 0
console.log('d. ', array[i])
//3
array[i+1] = 19
console.log('e. ', array)
//imprimir o array trocando o valor 4 por 19
const valor = array[i+6]
console.log('f. ', valor)
//8 (errei)


// Exercícios 2) Leia o código abaixo com atenção 
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//Resposta: ira imprimir a frase em letra maiuscula trocando as letras A por I e depois ira aparecer quantas letras e aspaços tem na frase 


//Exercícios de escrita de código 1) 
//Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
//Em seguida, Imprima no console a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

const nomeDoUsuario = prompt("Qual seu nome?")
const emailDoUsuario = prompt("Qual seu e-mail?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)


//Exercícios de escrita de código 2) Faça um programa que contenha um array com 5 
//das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
// a) Imprima no console o array completo
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista


const listaDecomida = ("banana", "maca", "pera", "uva", "melao")

console.log("Essas são as minhas comidas preferidas: ", listaDecomida)

//Só esta imprimindo no console a ultima comida (melão), nao sei pq

const comidaUsuario = prompt("Coloque sua comida preferida:")

listaDecomida.replace(listaDecomida[1], comidaUsuario)

console.log(listaDecomida)

//Só esta imprimindo no console a ultima comida (melão), nao sei pq



//Exercícios de escrita de código 3) 
//Faça um programa, seguindo os passos:
// a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// c) Imprima o array no console
// d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
// e) Remova da lista o item de índice que o usuário escolheu.
// f) Imprima o array no consoleImprima no console

const listaDeTarefas = ("")

const tarefa1 = prompt("Escreva tarefa 01:")
const tarefa2 = prompt("Escreva tarefa 02:")
const tarefa3 = prompt("Escreva tarefa 03:")

listaDeTarefas = (tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas)

//Só esta imprimindo no console o ultimo item da listaDeTarefas, nao sei pq

tarefaRealizada = prompt("Escreva uma tarefa já realizada: 1, 2 ou 3")


function retirada (){
if (tarefaRealizada === tarefa1){
    console.log(listaDeTarefas.replace(listaDeTarefas[0], tarefaRealizada)) 
}

Else if (tarefaRealizada === tarefa2){
    console.log(listaDeTarefas.replace(listaDeTarefas[1], tarefaRealizada)) 
}

Else if (tarefaRealizada === tarefa3){
    console.log(listaDeTarefas.replace(listaDeTarefas[2], tarefaRealizada)) 
}

Else (){console.log("Nenhuma das resposta validas.")}

}

console.log(retirada())


 
// DESAFIO 1) Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços




//DESAFIO 2) Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array







