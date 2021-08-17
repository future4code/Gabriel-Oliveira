// ----------------------> Exemplos <---------------------------

console.log('Olá, Maryam!')

//Aula 04 - Operadores e Lógica de Programação

// ----------------------> Exercicio 1 <---------------------------
// ----------------------> Exercicio 2 <---------------------------
// ----------------------> Exercicio 3 <---------------------------
// ----------------------> Exercicio 4 <---------------------------



//Desafio


// ----------------------> Exercicio 1 <---------------------------
// Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:

// Graus Fahrenheit(°F) para Kelvin(K)
// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

// Graus Celsius(°C) para Graus Fahrenheit (°C)
// (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

// let GRAUSCELSIUS = 1
// let GRAUS_FAHRENHEIT = (GRAUSCELSIUS)*(9/5) + 32
// let KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// console.log("Inicio:",GRAUSCELSIUS,"C", GRAUS_FAHRENHEIT,"F", KELVIN,"K")

// GRAUS_FAHRENHEIT = 77
// let KELVIN2 = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// console.log("a) 77F vira", KELVIN2, "K")

// GRAUSCELSIUS = 80
// GRAUS_FAHRENHEIT = (GRAUSCELSIUS)*(9/5) + 32
// console.log("b) 80C vira", GRAUS_FAHRENHEIT, "F")

// GRAUSCELSIUS = 30
// GRAUS_FAHRENHEIT = (GRAUSCELSIUS)*(9/5) + 32
// KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// console.log("C) 30C vira", GRAUS_FAHRENHEIT, "e", KELVIN, "K")

// GRAUSCELSIUS = prompt("Insire o valor em celsius para converter:")
// GRAUS_FAHRENHEIT = (GRAUSCELSIUS)*(9/5) + 32
// KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// console.log("D) Convertendo:",GRAUSCELSIUS,"C","para:", GRAUS_FAHRENHEIT,"F", "e", KELVIN,"K")

////////////////////////////////////

// let GRAUSCELSIUS = 1 
// let GRAUS_FAHRENHEIT = (GRAUSCELSIUS)*(9/5) + 32
// let KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// console.log(GRAUSCELSIUS, GRAUS_FAHRENHEIT, KELVIN)

// console.log("a) 77F vira", (77 - 32)*(5/9) + 273.15, "K")

// console.log("b) 80C vira", 80*(9/5) + 32, "F")

// console.log("c) 30C vira", 30*(9/5) + 32, "F e", (86- 32)*(5/9) + 273.15, "K")


// ----------------------> Execicio 2 <----------------------------
// Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de 
// energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. 
// Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
// b) Altere o programa para receber mais um valor: a porcentagem de desconto. 
// Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto


// function consumoDeEnergia(energia, valor){
//     return energia * valor    
//     }
// console.log(consumoDeEnergia(280, 0.05))    


//////////////////////////////////////////////////////////////

// function consumoDeEnergia(energia, valor){
//     return energia * valor    
//     }
// energia = 280
// valor = 0.05    
//     console.log(consumoDeEnergia(energia, valor))   



// ----------------------> Exercicio 3 <---------------------------
// Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para 
// representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar 
// quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), 
// pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  
// xícaras (xic). Dada essa introdução, faça o que se pede:

// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que 
// converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
// 20lb equivalem a X kg
// b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que 
// converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
// 10.5oz equivalem a X kg
// c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que 
// converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
// 100mi equivalem a X m
// d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que 
// converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
// 50ft equivalem a X m
// e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que 
// converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
// 103.56gal equivalem a X l
// f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que 
// converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
// 450 xic equivalem a X l
// g) Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao 
// usuário o valor da unidade original antes de converter


//A)
function libraKilo (conversao1){
    return conversao1 / 2.2046
    }
conversao1 = 20
console.log("A) 20lb equivalem a", libraKilo(conversao1), "kg")

//B)
function oncaKilo (conversao2){
    return (conversao2 * 45359237) / 1600000000
    }
conversao2 = 10.5
console.log("B) 10.5oz equivalem a", oncaKilo(conversao2), "kg")

//C)
function milhaMetro (conversao3){
    return conversao3 / 0.00062137
    }
conversao3 = 100
console.log("C) 100mi equivalem a", milhaMetro(conversao3), "m")

//D)
function pesMetro (conversao4){
    return conversao4 / 3.2808
    }
conversao4 = 50
console.log("D) 50ft equivalem a", pesMetro(conversao4), "m")

//E)
function galaoLitro (conversao5){
    return conversao5 / 0.26417
    }
conversao5 = 103.56
console.log("E) 103.56gal equivalem a", galaoLitro(conversao5), "l")

//F)
function xicaraLitro (conversao6){
    return (conversao6 * 6) / 25
    }
conversao6 = 450
console.log("E) 450xic equivalem a", xicaraLitro(conversao6), "l")

//////////////////////////////////////////////////////

// XXX TIRAR DUVIDA PARA CONSEGUIR REDUZIR AO CODIGO XXXXX CHEGUEI ATE O RESULDADO ABAIXO, mas não esta rodando

// function conversaoDeMedidas (libraKilo, oncaKilo, milhaMetro, pesMetro, galaoLitro, xicaraLitro){
//     return libraKilo / 2.2046
//     return (oncaKilo * 45359237) / 1600000000
//     return milhaMetro / 0.00062137
//     return pesMetro / 3.2808
//     return galaoLitro / 0.26417
//     return (xicaraLitro * 6) / 25
//     }
    
//     libraKilo = 20
//     oncaKilo = 10
//     milhaMetro = 100
//     pesMetro = 50
//     galaoLitro = 103.56
//     xicaraLitro = 450
    
//     console.log("Consolidado:", conversaoDeMedidas (libraKilo, oncaKilo, milhaMetro, pesMetro, galaoLitro, xicaraLitro))
//     console.log("Consolidado:", conversaoDeMedidas (oncaKilo))
//     console.log("Consolidado:", conversaoDeMedidas (milhaMetro))
//     console.log("Consolidado:", conversaoDeMedidas (pesMetro))
//     console.log("Consolidado:", conversaoDeMedidas (galaoLitro))
//     console.log("Consolidado:", conversaoDeMedidas (xicaraLitro))









