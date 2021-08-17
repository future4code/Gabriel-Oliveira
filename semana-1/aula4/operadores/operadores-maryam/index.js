// ----------------------> Exemplos <---------------------------

console.log("Olá, Maryam!");

// OPERADORES ARITMÉTICOS

// const valor1 = 10
// const valor2 = 20
// const valor3 = 40
// const valor4 = 80
// const valor5 = 3

// let resultado


// resultado = valor1 + valor2

// console.log('Resultado soma: ', resultado)

// resultado = valor4 - valor3

// console.log('Resultado subtração: ', resultado)

// resultado = valor1 * valor3

// console.log('Resultado multiplicação: ', resultado)

// resultado = valor3 / valor2

// console.log('Resultado divisão: ', resultado)

// resultado = valor1 % valor5 //pega o resto da divisão 10 % 3 = 1

// console.log('Resultado módulo - resto da divisão: ', resultado)

// resultado = 10 % 2 //reusltado = 0
// console.log('Resultado módulo - exemplo 2: ', resultado)

// resultado = 11 % 2 // resultado = 1
// console.log('Resultado módulo - exemplo 3: ', resultado)

// let saldo = 100

// console.log('Saldo inicial: ', saldo)

// const deposito = 200


// saldo = saldo + deposito

// //forma simplificada

// // saldo += deposito

// console.log('Novo saldo: ', saldo)

// COMPARADORES

// let resultado

// resultado = 1 === '1' //false
// console.log('Resultado 1: ', resultado )
// resultado = 1 === 1 // true
// console.log('Resultado 2: ', resultado )

// resultado = 2 === 1 //false 
// console.log('Resultado 3: ', resultado )

// resultado = typeof 2 === typeof 3 //true
// console.log('Resultado 4: ', resultado)


// resultado = 2 !== '2' //true
// console.log('Resultado 5: ', resultado)

// resultado = 2 !== 2 //false
// console.log('Resultado 6: ', resultado)

// resultado = 2 > 3 //false
// console.log('Resultado 7: ', resultado)

// resultado = 2 > 2 // false
// console.log('Resultado 8: ', resultado)

// resultado = 2 >= 2 // true
// console.log('Resultado 9: ', resultado)

//OPERADORES LÓGICOS

// const fazSol = false
// const estaCalor = true
// const temPraia = true

// const vouParaPraia = fazSol && estaCalor && temPraia
// // && - o resultado é true se e somente se todos os valores forem true
// console.log('Vou para praia?', vouParaPraia)

// const estouComFome = true
// const estouEmCasa = false
// const estouTriste = false

// const vouComerChocolate = estouComFome || estouEmCasa || estouTriste
// // || - o resultado é false se e somente se todos os valores forem false

// console.log('Vou comer chocolate?', vouComerChocolate)


const oBrasilGanhouMedalhas = true

console.log('Brasil ganhou medalhas?', !oBrasilGanhouMedalhas)

// ----------------------> Exercicio 1 <---------------------------
// Faça as seguintes operações usando o computador:

// Somar 3 com 4
// Multiplicar 3 com 5 e dividir o resultado por 2
// Subtrair 5 de 4 e multiplicar o resultado por -1
// Determinar o resto da divisão de 234 por 5


// let resultado
// resultado = 3 + 4
// console.log('1): ', 3 + 4 )

// resultado = 3 * 5 / 2
// console.log('2): ', resultado )

// resultado = (4 - 5) * -1
// console.log('3): ', resultado )

// resultado = 234 % 5
// console.log('4): ', resultado )


// ----------------------> Execicio 2 <---------------------------
// Crie duas variáveis que guardem dois números. Imprima na tela as seguintes mensagens:

// O primeiro número é igual ao segundo? True/False
// O primeiro número é diferente do segundo? True/False
// O primeiro número é maior que o segundo? True/False
// O primeiro número é menor que o segundo? True/False

// const numero1 = 10
// const numero2 = 5

// console.log('O primeiro número é igual ao segundo? ', numero1 === numero2)

// console.log('O primeiro número é diferente do segundo? ', numero1 !== numero2)

// console.log('O primeiro número é maior que o segundo? ', numero1 > numero2)

// console.log('O primeiro número é menor que o segundo? ', numero1 < numero2)



// ----------------------> Exercicio 3 <---------------------------
// Antes de começar, crie 3 variáveis: a, b e c. Atribua os valores true, false e true, respectivamente

// Realize a operação: a && b // false
// Realize a operação: b && c // false
// Realize a operação: a && c // true
// Realize a operação: a && b && c // false

// const a = true
// const b = false
// const c = true

// console.log('A)', a && b)
// console.log('B)', b && c)
// console.log('C)', a && c)
// console.log('D)', a && b && c)
// ----------------------> Exercicio 4 <---------------------------

// Antes de começar, crie 3 variáveis: a, b e c. Atribua os valores true, false e true, respectivamente
// a= true
// b = false
// c = true
// Realize a operação: a || b //true
// Realize a operação: b || c // true
// Realize a operação: a || c // true
// Realize a operação: a || b || c //true


// const a = true
// const b = false
// const c = true

// console.log('A)', a || b)
// console.log('B)', b || c)
// console.log('C)', a || c)
// console.log('D)', a || b || c)

// ----------------------> Exercicio 5 <---------------------------

// Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano atual e mostre:    
// O nome da pessoa com um olá
// A idade dessa pessoa
// Um true ou false que diz se ela é maior de idade
// Quantos anos ela terá em 2050

const nome = prompt('Insira o seu nome')
const anoNascimento = Number(prompt('Insira o ano do seu nascimento'))
const anoAtual = Number(prompt('Insira o ano atual'))

//1
console.log('Olá', nome)

//2
const idade = anoAtual - anoNascimento
console.log('Idade:', idade)

//3
console.log('É maior de idade: ', idade >= 18)

//4
const idadeFuturo = 2050 - anoNascimento
console.log('Em 2050 a idade será: ', idadeFuturo)