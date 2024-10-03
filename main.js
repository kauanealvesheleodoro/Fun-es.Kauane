const caixaPrincipal = document.querySelector(" .caixa-principal");
const caixaPerguntas = document.querySelector(" .caixa-perguntas");
const caixaAlternativas = document.querySelector(" .caixa-alternativas");
const caixaResultado = document.querySelector(" .caixa-resultado");
const textoResultado = document.querySelector(" .texto-resultado");


const perguntas = [
    {
        enunciado: "Assim que vocẽ ficou com duvida sobre o que prefere comer, criamos um chat onde vocẽ consegue tirar suas duvidas, o que vocẽ prefere?",
        alternativas: [
            {
                texto: " Doce",
                afirmacao: " Sentir o gosto açucarado na língua leva o cérebro a produzir dopamina, dessa forma as pessoas ficam mais felizes. ",
            },
            {
                texto: " Salgado ",
                afirmacao: " Sentir o gosto salgado na língua leva o cérebro a produzir aldesterona, dessa forma as pessoas ficam mais felizes.",
            }
        ]
    },
    {
        enunciado: " Entre os diversos tipos de carne, vocẽ prefere comer carne ou prefere ser uma pessoa vegetariaana?",
        alternativas: [
            {
                texto: "Carne ",
                afirmacao: " Muito bem, se vocẽ escolheu a carne que é rica em proteinas, vocẽ se identificará como uma pessoa cheia de energia, sendo essencial ao bem estar. ",
            },
            {
                texto: " Ser vegetariano ",
                afirmacao: " Se vocẽ escolheu ser vegetariano, poderá se entusiasmar a fazer uma dieta, que pode ser rica em proteinas, e trazer beneficios a saúde cardiovascular. ",
            }
        ]
    },
    {
        enunciado: " Supondo que vocẽ irá fazer uma dieta, mas ainda não se decidiu se prefere fazer uma academia, ou fazer uma dieta com alimentos nutritivos, o que vocẽ prefere?",
        alternativas: [
            {
                texto: " Com alimentos nutritivos",
                afirmacao: " Fazer uma dieta com alimentos nutritivos, irá contribuir para a prevenção de doenças, e fornecerá energia necessária para o dia a dia, mwelhorando a disposição. ",
            },
            {
                texto: " Com academia ",
                afirmacao: " Fazer uma dieta através da academia, proporciona um corpo totalmente exercitado e capaz de enfrentar exercícios intensos, reduzindo-se assim o estresse do dia a dia. ",
            }
        ]
    },
    {
        enunciado: "?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: "Afirmação",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",

            }
        ]

    },



];

let atual = 0;
let perguntaAtual; 
let historiaFinal = "";

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
    caixaAlternativas.textContent = "";
    moostraAlternativas();
}

function moostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button"); 
        botaoAlternativas.textContent = alternativa.texto; 
        caixaAlternativas.appendChild(botaoAlternativas);
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    } 
} 

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}
mostraPergunta();


