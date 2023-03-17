
const botoesCarrossel = document.querySelectorAll('.botao');
const descricoes = document.querySelectorAll('.descricao');
const arts = document.querySelectorAll('.art');

botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', () =>{
        
        desativaBotaoSelecionado();
        
        selecionarBotaoCarrossel(botao);
       
        esconderDescricaoAtiva();
        esconderArtAparent();
        
        mostrarDescricaoAtiva(indice);
        mostrarArtAparent(indice);
    })
})

function mostrarArtAparent(indice) {
    arts[indice].classList.add('aparent');
}

function mostrarDescricaoAtiva(indice) {
    descricoes[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderArtAparent() {
    const artAparent = document.querySelector('.aparent');
    artAparent.classList.remove('aparent');
}

function esconderDescricaoAtiva() {
    const descricaoAtiva = document.querySelector('.ativa');
    descricaoAtiva.classList.remove('ativa');
}

function desativaBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
