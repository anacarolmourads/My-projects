var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))
var operacao = prompt("Digite: 1 - Multiplicação/ 2 - Divisão/ 3 - Soma e 4 - Subtração")
if(operacao == 1){
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + "*" + segundoValor + "=" + resultado + "</h2>")
} else if (operacao == 2){
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + "/" + segundoValor + "=" + resultado + "</h2>")
} else if (operacao == 3){
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + "+" + segundoValor + "=" + resultado + "</h2>")
}else if (operacao == 4){
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + "-" + segundoValor + "=" + resultado + "</h2>")
} else{
  document.write("<h2>Operação inválida</h2>")
}