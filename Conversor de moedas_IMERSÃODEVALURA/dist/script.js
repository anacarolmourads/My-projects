var dolar = parseFloat(prompt ("Digite o valor em dolar a ser convertido em real:"))

var real = dolar * 5.50
var realfixado = real.toFixed(2)

var texto = "Valor em real = R$ "
alert(texto + realfixado)