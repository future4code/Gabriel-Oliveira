/*
//exercicio 1)
let array
console.log('a. ', array) 
// undefined pq o array não foi atribuido valor

array = null
console.log('b. ', array) //
// b.  null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //
// c. 11

let i = 0
console.log('d. ', array[i])
// d. 3

array[i+1] = 19
console.log('e. ', array)
// e. 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13

const valor = array[i+6]
console.log('f. ', valor)
// f. 3, 19, 5, 6, 7, 8, 19, 10, 11, 12, 13
*/

//exercicio 2) Leia o código abaixo com atenção 
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//Resposta: ira imprimir a frase toda em maiuscula, substituindo todos os "A" por "I" e depois imprimir a conta dos numeros de casas na frase (contando com espaços)


//Exercícios de escrita de código 1)

//Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
// deoliveiragabriel88@gmail.com

// const nomeDoUsuario = prompt("Qual seu nome?")
// const emailDoUsuario = prompt("Qual seu e-mail?")
// console.log("O e-mail", + emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o),", + nomeDoUsuario, "!")

// const nomeDoUsuario = prompt("Qual seu nome?")
// const emailDoUsuario = prompt("Qual seu e-mail?")
// console.log(`O e-mail, ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)




// exercicio 2)
// Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
// a) Imprima no console o array completo
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. 
// Imprima no consolea nova lista


// const comidas = ["alface", "feijao", "farofa", "bife", "batata"]
// console.log(comidas)
// console.log("Essas são as minhas comidas preferidas: ", comidas[0],
//     comidas[1],
//     comidas[2],
//     comidas[3],
//     comidas[4])


// //  console.log("O tipo do arrey comidas é:", typeof (comidas[0]))


// comidaUsuario=prompt("Qual sua comida preferida?")
// console.log(comidaUsuario)
// console.log(comidaUsuario.replace(comidaUsuario, comidas[1]))



// exercicio 3)
// Faça um programa, seguindo os passos:
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// c) Imprima o array no console
// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
// e) Remova da lista o item de índice que o usuário escolheu.
// f) Imprima o array no consoleImprima no console

let listaDeTarefas

const tarefa1 = prompt("Digite sua tarefas 1:")
const tarefa2 = prompt("Digite sua tarefas 2:")
const tarefa3 = prompt("Digite sua tarefas 3:")

listaDeTarefas = [tarefa1, tarefa2, tarefa3]
console.log(listaDeTarefas)

let indice = Number(prompt("Digite um indice para retirada(0, 1 ou 2):"))

listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)




// function compararNumeros (numero1, numero2) {
//     console.log("Função chamada")

//     If (numero1 === numero2) {
//         console.log("São iguais")
//     }
// }

// function numeroUsuario1 = Number(prompt("Insira um numero"))
// function numeroUsuario2 = Number(prompt("Insira outro numero"))

// compararNumeros()











