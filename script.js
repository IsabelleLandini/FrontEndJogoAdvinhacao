//Gerar um número aleatório entre 1 e 100 e armazená-lo em uma variável.
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let maxTentativas = 10;

//referencias aos elementos HTML
const chuteInput = document.getElementById('chute');
const chutarButton = document.getElementById('chutarButton');
const mensagem = document.getElementById('mensagem');
const reiniciarButton = document.getElementById('reiniciarButton');
const tentativasRestantesDiv = document.getElementById('tentativasRestantes');

//Função para enviar mensagens ao usuário
function enviarMensagem(texto){
    mensagem.textContent = texto;
}
//Função para atualizar o número de tentativas restantes
function atualizarTentativasRestantes(){
    tentativasRestantesDiv.textContent = "Tentativas restantes: " + (maxTentativas - tentativas);
}

//atualiza o número de tentativas restantes
atualizarTentativasRestantes(); //chama afunção no inicio para mostrar 10 tentativas
reiniciarButton.disabled = true;

//Função chamada ao clicar no botão "Chutar":
chutarButton.addEventListener('click', function(event) {
   
    let chute = parseInt(chuteInput.value);
    //validação basica se o input é um número válido
    if (isNaN(chute) || chute < 1 || chute > 100){
        enviarMensagem("Por favor, insira um número válido entre 1 e 100.");
        return;
    }

    tentativas++;
     if (chute === numeroSecreto){
        enviarMensagem("Você acertou!");
        fimDeJogo(true); // acertou
    } else if (tentativas >= maxTentativas){
        enviarMensagem("Fim de jogo! O número era " + numeroSecreto);
        fimDeJogo(false);// errou todas as tentativas
    } else {
        if (chute < numeroSecreto){
            enviarMensagem("O número secreto é maior");
        } else {
            enviarMensagem("O número secreto é menor");
        }
    }

atualizarTentativasRestantes(); //atualiza o número de tentativas restantes
chuteInput.value = ''; //limpa o campo de input
chuteInput.focus(); //foca novamente no campo de input
});

//Função chamada após acerto ou fim das tentativas:
function fimDeJogo(vitoria){
    chutarButton.disabled = true;
    chuteInput.disabled = true;
    reiniciarButton.disabled = false; //habilita o botão de reiniciar
    reiniciarButton.style.display = 'block'; //mostra o botão de reiniciar
}

//Função para reiniciar o jogo:
reiniciarButton.addEventListener('click', function() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1; //gera novo numero secreto
    tentativas = 0; //reseta as tentativas
    chutarButton.disabled = false; //habilita botão chutar
    chuteInput.disabled = false; //habilita o campo de input
    reiniciarButton.disabled = true; //desabilita o botão reiniciar
    reiniciarButton.style.display = 'none'; //esconde o botão reiniciar
    chuteInput.value = ''; //limpa o campo de palpite
    mensagem.textContent = "Novo Jogo! Faça seu palpite."; //msg inicial ao usuario

    atualizarTentativasRestantes();
    chuteInput.focus(); //foca no campo de input
});


