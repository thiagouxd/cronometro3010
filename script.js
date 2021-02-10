let estaNoPrimeiroCronometro = true;
musica1 = new Audio('./audio/Wood Golf Club Hit Ball.mp3')
musica2 = new Audio('./audio/Beep Short.mp3')

function contar(contagemParaExercicio, contagemParaDescanso) {
    let valorAtualDaContagem = contagemParaExercicio;

    mostrarOuOcultarBotaoDeStart()
    mostrarOuOcultarBotaoDeStop()

    setInterval(() => {
        alterarNumero(valorAtualDaContagem)
        valorAtualDaContagem = valorAtualDaContagem - 1
        if (valorAtualDaContagem < 0 && estaNoPrimeiroCronometro) {
            tocarAlarme(musica2)
            alterarCorDoContador("#a41919")
            valorAtualDaContagem = contagemParaDescanso;
            estaNoPrimeiroCronometro = !estaNoPrimeiroCronometro
        } else if (valorAtualDaContagem < 0) {
            tocarAlarme(musica1)
            alterarCorDoContador("#22202b")
            valorAtualDaContagem = contagemParaExercicio;
            estaNoPrimeiroCronometro = !estaNoPrimeiroCronometro
        }
    }, 1000);
}

function alterarNumero(valor) {
    const numero = document.getElementById('contador')
    numero.innerText = valor
}

function alterarCorDoContador(cor) {
    document.body.style.backgroundColor = cor
}

function pararAContagem() {
    location.reload()
}

function mostrarOuOcultarBotaoDeStop() {
    document.getElementById('botaoDeStop').classList.toggle('escondido')
}

function mostrarOuOcultarBotaoDeStart() {
    document.getElementById('botaoDeStart').classList.toggle('escondido')
}

function tocarAlarme(musica) {
    musica.play()
}