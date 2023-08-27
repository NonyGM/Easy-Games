function jogar(escolhaDoUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaDoComputador = opcoes[Math.floor(Math.random() * 3)];
    const resultado = document.getElementById('resultado');

    if (escolhaDoUsuario === escolhaDoComputador) {
        resultado.textContent = 'Empate!';
    } else if (
        (escolhaDoUsuario === 'pedra' && escolhaDoComputador === 'tesoura') ||
        (escolhaDoUsuario === 'papel' && escolhaDoComputador === 'pedra') ||
        (escolhaDoUsuario === 'tesoura' && escolhaDoComputador === 'papel')
    ) {
        resultado.textContent = 'Você ganhou! Computador escolheu ' + escolhaDoComputador + '.';
    } else {
        resultado.textContent = 'Você perdeu! Computador escolheu ' + escolhaDoComputador + '.';
    }
}
