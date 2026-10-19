const perguntas = [
    {
        pergunta: "Qual é o maior animal terrestre do mundo?",
        opcoes: [
            "Girafa",
            "Elefante-africano",
            "Rinoceronte",
            "Hipopótamo"
        ],
        resposta: 1
    },

    {
        pergunta: "Qual animal é conhecido como o rei da selva?",
        opcoes: [
            "Tigre",
            "Leopardo",
            "Leão",
            "Onça-pintada"
        ],
        resposta: 2
    },

    {
        pergunta: "Qual destes animais é um mamífero?",
        opcoes: [
            "Tubarão",
            "Golfinho",
            "Crocodilo",
            "Pinguim"
        ],
        resposta: 1
    },

    {
        pergunta: "Qual animal é conhecido por mudar de cor para se camuflar?",
        opcoes: [
            "Camaleão",
            "Elefante",
            "Canguru",
            "Zebra"
        ],
        resposta: 0
    },

    {
        pergunta: "Quantas pernas normalmente possui uma aranha?",
        opcoes: [
            "4",
            "6",
            "8",
            "10"
        ],
        resposta: 2
    },

    {
        pergunta: "Qual é o maior animal do planeta?",
        opcoes: [
            "Elefante-africano",
            "Baleia-azul",
            "Tubarão-branco",
            "Girafa"
        ],
        resposta: 1
    },

    {
        pergunta: "Qual destes animais é conhecido por produzir mel?",
        opcoes: [
            "Formiga",
            "Abelha",
            "Borboleta",
            "Mosca"
        ],
        resposta: 1
    },

    {
        pergunta: "Qual animal possui uma bolsa para carregar seus filhotes?",
        opcoes: [
            "Canguru",
            "Urso",
            "Lobo",
            "Macaco"
        ],
        resposta: 0
    },

    {
        pergunta: "Qual destes animais é um réptil?",
        opcoes: [
            "Sapo",
            "Tartaruga",
            "Golfinho",
            "Pinguim"
        ],
        resposta: 1
    },

    {
        pergunta: "Qual animal é famoso por suas listras pretas e brancas?",
        opcoes: [
            "Zebra",
            "Girafa",
            "Tigre",
            "Panda"
        ],
        resposta: 0
    }
];

let perguntaAtual = 0;
let pontos = 0;
let respondeu = false;

const perguntaElemento = document.getElementById("pergunta");
const opcoesElemento = document.getElementById("opcoes");
const proximaBotao = document.getElementById("proxima");

const numeroPergunta = document.getElementById("numero-pergunta");
const pontuacaoElemento = document.getElementById("pontuacao");
const barraProgresso = document.getElementById("barra-progresso");

function mostrarPergunta() {

    respondeu = false;

    const pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent = pergunta.pergunta;

    numeroPergunta.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    pontuacaoElemento.textContent =
        `Pontos: ${pontos}`;

    const progresso =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    barraProgresso.style.width = `${progresso}%`;

    opcoesElemento.innerHTML = "";

    pergunta.opcoes.forEach((opcao, indice) => {

        const botao = document.createElement("button");

        botao.classList.add("opcao");

        botao.textContent = opcao;

        botao.onclick = () => verificarResposta(indice, botao);

        opcoesElemento.appendChild(botao);
    });

    proximaBotao.style.display = "none";
}

function verificarResposta(indice, botaoClicado) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const pergunta = perguntas[perguntaAtual];

    const botoes = document.querySelectorAll(".opcao");

    botoes.forEach((botao, indiceBotao) => {

        if (indiceBotao === pergunta.resposta) {
            botao.classList.add("correta");
        }

    });

    if (indice === pergunta.resposta) {

        pontos++;

        botaoClicado.classList.add("correta");

        pontuacaoElemento.textContent =
            `Pontos: ${pontos}`;

    } else {

        botaoClicado.classList.add("errada");
    }

    proximaBotao.style.display = "inline-block";
}

function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();
    }
}

function mostrarResultado() {

    document.getElementById("quiz").classList.add("escondido");

    document.getElementById("resultado").classList.remove("escondido");

    document.getElementById("resultado-pontos").textContent =
        `${pontos} / ${perguntas.length}`;

    let mensagem;

    if (pontos === 10) {

        mensagem = "🏆 Incrível! Você acertou todas!";

    } else if (pontos >= 7) {

        mensagem = "👏 Muito bem! Você entende bastante de animais!";

    } else if (pontos >= 5) {

        mensagem = "🙂 Bom trabalho! Você pode aprender ainda mais!";

    } else {

        mensagem = "🐾 Continue estudando os animais e tente novamente!";
    }

    document.getElementById("mensagem-final").textContent = mensagem;
}

function reiniciarQuiz() {

    perguntaAtual = 0;

    pontos = 0;

    document.getElementById("quiz").classList.remove("escondido");

    document.getElementById("resultado").classList.add("escondido");

    mostrarPergunta();
}

mostrarPergunta();
