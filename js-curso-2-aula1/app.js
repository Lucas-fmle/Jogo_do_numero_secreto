let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){

let campo = document.querySelector(tag);
campo.innerHTML = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        let tenativaMensagem = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Acertou o número secreto com ${tentativas} ${tenativaMensagem}`;
        exibirTexto('h1', 'acertou');
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor do que o chute');
        } else {
            exibirTexto('p', 'O número secreto é maior do que o chute');
        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosLista == numeroLimite){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p','Escolha um número entre 1 e 100');
}