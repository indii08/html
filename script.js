const caixaPrincipal = document.querySelector(".caixa-principal");
    
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    
    const caixaResultado = document.querySelector(".caixa-alternativas");
    
    const textoResultado = document.querySelector(".texto-resultado");
    
    const perguntas = [
    {
    enunciado: "Pergunta 1",
    alternativas: ["Alternativa 1”, “Alternativa 2"],
    },
    {
    enunciado: "Pergunta 2",
    alternativas: ["Alternativa 1”, “Alternativa 2"],
    },
    ];
    let atual = 0;
let perguntaAtual;[
    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
    }
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent =
    }
    perguntas[atual]
perguntaAtual = perguntas[atual];
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    }
    mostraPergunta();

]