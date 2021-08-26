Exercícios de Fixação de Javascript - Treino 1

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas*0.05)
  let salario = 2000
  console.log(salario+comissao) 
  return salario + comissao
}

Exercícios de Fixação de Javascript - Treino 2

function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let valor = 1.3
  
  if (quantidade >=12){
    valor = 1
  }
 
    return quantidade*valor
    
}
