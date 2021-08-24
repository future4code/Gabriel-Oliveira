function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas*0.05)
  let salario = 2000
  console.log(salario+comissao) 
  return salario + comissao
}
