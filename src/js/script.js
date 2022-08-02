var jogadorEscolha = 0;
var computadorEscolha = 0;
var resultado = -1; //0 é empate
var jogadorPontucao = 0;
var computadorPontucao = 0;
function reset() {
    jogadorEscolha = 0;
    computadorEscolha = 0;
    resultado = -1;
    jogadorPontucao = 0;
    computadorPontucao = 0;
    document.getElementById('mensagens').innerHTML = 'MESSAGES';
    document.getElementById('jogador-pontos').innerHTML = jogadorPontucao;
    document.getElementById('computador-pontos').innerHTML = computadorPontucao;
    jogar().reset;
}
function jogar(escolha) {
    jogadorEscolha = escolha;
    //Escolhendo opção aleatória para o robô
    computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
    //Condições do jogo -> Pedra - 1; Papel - 2; Tesoura - 3
    if ((jogadorEscolha == 1) && (computadorEscolha == 1)) {
        resultado = 0;
    }
    else if ((jogadorEscolha == 1) && (computadorEscolha == 2)) {
        resultado = 2;
    }
    else if ((jogadorEscolha == 1) && (computadorEscolha == 3)) {
        resultado = 1;
    }
    else if ((jogadorEscolha == 2) && (computadorEscolha == 1)) {
        resultado = 1;
    }
    else if ((jogadorEscolha == 2) && (computadorEscolha == 2)) {
        resultado = 0;
    }
    else if ((jogadorEscolha == 2) && (computadorEscolha == 3)) {
        resultado = 2;
    }
    else if ((jogadorEscolha == 3) && (computadorEscolha == 1)) {
        resultado = 2;
    }
    else if ((jogadorEscolha == 3) && (computadorEscolha == 2)) {
        resultado = 1;
    }
    else if ((jogadorEscolha == 3) && (computadorEscolha == 3)) {
        resultado = 0;
    }
    //Remover selecionado
    document.getElementById("jogador-escolha-1").classList.remove('selecionado');
    document.getElementById("jogador-escolha-2").classList.remove('selecionado');
    document.getElementById("jogador-escolha-3").classList.remove('selecionado');
    document.getElementById("computador-escolha-1").classList.remove('selecionado');
    document.getElementById("computador-escolha-2").classList.remove('selecionado');
    document.getElementById("computador-escolha-3").classList.remove('selecionado');
    //Selecionar
    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado');
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado');
    //Mensagem de resultado
    if (resultado == 0) {
        document.getElementById('mensagens').innerHTML = 'DRAW';
    }
    if (resultado == 1) {
        document.getElementById('mensagens').innerHTML = 'USER WINS';
        jogadorPontucao++;
    }
    if (resultado == 2) {
        document.getElementById('mensagens').innerHTML = 'ROBOT WINS';
        computadorPontucao++;
    }
    document.getElementById('jogador-pontos').innerHTML = jogadorPontucao;
    document.getElementById('computador-pontos').innerHTML = computadorPontucao;
}



