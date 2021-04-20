var participantes = ["http://pngimg.com/uploads/number1/small/number1_PNG14888.png","https://cdn.xl.thumbs.canstockphoto.com.br/contorno-modelo-elements-isolated-sinal-n%C3%BAmero-escuro-experi%C3%AAncia-2-desenho-vector-cliparte-vetor_csp52460604.jpg"]

var fabiano = {
    //nome: "Fabiano",
    nome: "<img src=" + participantes[0] + ">",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}
var carol = {
    //nome: "Carol",
  nome: "<img src=" + participantes[1] + ">",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

carol.pontos = calculaPontos(carol)
fabiano.pontos = calculaPontos(fabiano)

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [carol, fabiano]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for (var i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}