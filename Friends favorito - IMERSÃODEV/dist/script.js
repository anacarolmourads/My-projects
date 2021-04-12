//var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
//var segundoValor = parseInt(prompt("Digite o segundo valor:"))
var operacao = prompt("ESCOLHA SEU PERSONAGEM FAVORITO: 1 - JOEY/ 2 - RACHEL/ 3 - CHANDLER/ 4 - MONICA/ 5 - ROSS/ 6 - PHOEBE")
if(operacao == 1){
  var resultado = ">> JOEY"
  document.write("<h2>" + resultado + "</h2>")
  }else if (operacao == 2){
  var resultado = ">> RACHEL"
  document.write("<h2>" + resultado + "</h2>")
  }else if (operacao == 3){
  var resultado = ">> CHANDLER"
  document.write("<h2>" + resultado + "</h2>")
  }else if (operacao == 4){
  var resultado = ">> MÔNICA"
  document.write("<h2>" + resultado + "</h2>")
  }else if (operacao == 5){
  var resultado = ">> ROSS"
  document.write("<h2>" + resultado + "</h2>")
  }else if (operacao == 6){
  var resultado = ">> PHOEBE"
  document.write("<h2>" + resultado + "</h2>")
} else{
  document.write("<h2>Operação inválida</h2>")
}