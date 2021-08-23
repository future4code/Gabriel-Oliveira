// ///////////////////// DADOS /////////////////////
// //XXXXXXXXXXXXXXXXXXXXXXXINICIO DOS EXERCICIOS FEITOS NA AULAXXXXXXXXXXXXXXXXXXXXXXX

// const pokemons = [
//    { nome: "Bulbasaur", tipo: "grama" },
//    { nome: "Bellsprout", tipo: "grama" },
//    { nome: "Charmander", tipo: "fogo" },
//    { nome: "Vulpix", tipo: "fogo" },
//    { nome: "Squirtle", tipo: "água" },
//    { nome: "Psyduck", tipo: "água" },
// ]

// const numerosAleatorios = [1, 2, 5, 8, 10, 11, 13, 15, 20]

// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preço: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preço: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preço: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preço: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preço: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preço: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preço: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preço: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preço: 8.99 },
//    { nome: "Sabão em Pó", categoria: "Limpeza", preço: 10.80 }
// ]


// ///////////////////// FUNÇÕES /////////////////////


// function verificarPar(numero, processar) {

//    if (numero % 2 === 0) {
//       const resultado = numero / 2
//       processar(resultado)
//    }
// }

// function verificarImpar(numero, callback) {
//    if (numero % 2 !== 0) {
//       callback(numero)
//    }
// }

// function imprimirMensagem(valor) {
//    console.log("O resultado da sua conta é:", valor)
// }

// const validarNumeroPar = num => num % 2 === 0

// function extrairNome(obj, coisinha, array) {
//    console.log(coisinha)
//    return obj.nome
// }

// function validarPokemonDeGrama(pokemon) {
//    return pokemon.tipo === "grama"
// }


// ///////////////////// TESTES /////////////////////


// verificarPar(5, imprimirMensagem)

// verificarImpar(
//    4,
//    () => { console.log("Sim, é ímpar") }
// )

// const primeiroNome = extrairNome(pokemons[0], 9)

// const nomesDosPokemons = pokemons.map(extrairNome)

// const categoriasDosProdutos = produtos.map(
//    (produto, index, array) => {
//       // console.log(produto)
//       return produto.categoria
//    }
// )

// const mensagens = numerosAleatorios.map(
//    (numero, i, array) => {
//       const mensagem = `O elemento ${i} é ${numero}`
//       // console.log(array[2])
//       return mensagem
//    }
// )

// const resultado = validarPokemonDeGrama(pokemons[1])
// const pokemonsDeGrama = pokemons.filter(validarPokemonDeGrama)
// const produtosAleatorios = produtos.filter(
//    (item, i, array)=>{
//       return i % 2 === 0
//    }
// )

// const numerosPares = numerosAleatorios.filter(validarNumeroPar)

// const numerosMaioresQueDez = numerosAleatorios.filter(numero => numero > 10)

// const validarProdutoDeLimpeza = (item, i, array) => {
//    return item.categoria === "Limpeza"
// }

// const produtosLimpeza = produtos
//    .filter(validarProdutoDeLimpeza)
//    .map(extrairNome)

// // XXXXXXXXXXXXXXXXXXXXXXX FIM DOS EXERCICIOS FEITOS NA AULA XXXXXXXXXXXXXXXXXXXXXXX





//XXXXXXXXXXXXXXXXXXXXXXX  INICIO DOS EXERCICIOS DA TARDE XXXXXXXXXXXXXXXXXXXXXXX
// Exercícios de interpretação de código
//1) a) Sera impresso o valor do nome, apelido e do array
//2) a) Sera impresso o valor dos nomes (Amanda Rangel, Laís Petra, Letícia Chijo)
//3) a) Sera impresso o valor dos apelidos diferentes de Chijo

//Exercícios de escrita de código
// 1) a) Crie um novo array que contenha apenas o nome dos doguinhos
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

const petsNomes = pets.map((item) => {
   return item.nome
})
console.log("1 A)",petsNomes)


//1 b) Crie um novo array apenas com os cachorros salsicha

const petsRaca = pets.filter((item) => {
   return item.raca === "Salsicha"
}
)
console.log("1 B)",petsRaca)

// 1) c) Crie um novo array que possuirá mensagens para enviar para todos os 
// clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto 
// de 10% para tosar o/a [NOME]!"

const petsPoodles = pets.filter(item => item.raca === "Poodle")
.map( item => {
   console.log(`1 C): Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
   return item.nome
})

// 2a) Crie um novo array que contenha apenas o nome de cada item
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const produtosNomes = produtos.map((item, index, array) => {
   return item.nome
}
)
console.log("2 A)",produtosNomes)


// 2b) Crie um novo array que contenha um objeto com o nome e o preço
// de cada item, aplicando 5% de desconto em todos eles
const produtosNomePreco = produtos.map((item) => {
   return {nome: item.nome, preco: (item.preco*0.95).toFixed(2)}
}
)
console.log("2 B)",produtosNomePreco)



// 2c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const produtosBebidas = produtos.filter((item) => {
   return item.categoria === "Bebidas"
}
)
console.log("2 C)",produtosBebidas)

// 2d) Crie um novo array que contenha apenas os objetos cujo nome contenha 
//a palavra "Ypê"
const produtosYpe = produtos.filter((item) => {
   return item.nome.includes("Ypê")
}
)
console.log("2 D",produtosYpe)

// 2E) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const compreProdutosNomePreco = produtos.filter((item) => {
   return item.nome.includes("Ypê")
}
).map( item => {
   console.log(`1 E): Compre ${item.nome} por R$ ${item.preco}`)
   return item.nome
})


//XXXXXXXXXXXXXXXXXXXXXXX FIM DOS EXERCICIOS DA TARDE XXXXXXXXXXXXXXXXXXXXXXX


//XXXXXXXXXXXXXXXXXXXXXXX INICIO DESAFIOS XXXXXXXXXXXXXXXXXXXXXXX
//1)Dado o seguinte array de pokémons, 
//realize as operações pedidas nos itens abaixo:
//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem 
//alfabética
const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]


const nomesPokemons = pokemons.map((item) => {
   return item.nome
})
console.log("1 A)",(nomesPokemons.sort()))

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
const pokemonsSemrepeticao = pokemons.map((item) => {
   listaNomesSemRepeticao = ""
   for (i=0; i<pokemons.length; i++){
      pokemons.length[i] === listaNomesSemRepeticao
      listaNomesSemRepeticao = pokemons.push(pokemons.length[i])
   }
   return `1 B) ${pokemonsSemrepeticao}`
 
}  
)

//não consegui terminar o segundo


//XXXXXXXXXXXXXXXXXXXXXXX FIM DESAFIOS XXXXXXXXXXXXXXXXXXXXXXX
