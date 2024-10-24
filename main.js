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
        enunciado: "Entretanto, para se fazer uma dieta rica em proteínas, voce prefere consumir mais chás caseiros ou prefere se neutralizar com medicamentos industrializados?",
        alternativas: [
            {
                texto: " Com chás caseiros ",
                afirmacao: " Ao se fazer uma dieta com chás caseiros, irá proporcionar o aceleramento do metabolismo, diminuindo-se qualquer doenças de transmissão de inchaços pelo corpo.",
            },
            {
                texto: " Com medicamentos industrializados ",
                afirmacao: " Muito bem, ao se fazer uma dieta através de medicamentos industrializados, irá proporcionar a cura de impactos associados a obesidade, que está sendo um grande fator causado pela população",
            }
        ]
    },
    {
        enunciado: "Sendo-se assim para se manter em uma saúde totalmente de qualidade, se hidratando com líquidos que te darão mais energia e disposição ao dia a dia, voce prefere toar água ou refrigerante?",
        alternativas: [
            {
                texto: " com refrigerante  ",
                afirmacao: "Muito bem, se consumindo refrigerantes, irá contribuir para a melhoria do foco,atenção,e memória, reduzindo-se assim o risco de demencia",
            },
            {
                texto: " Consumir água ",
                afirmacao: " Muito bem, escolha ótima, se consumir água no dia a dia cada vez mais,evita o ressecamento da pele, se ajudando-se no hidratamento das células e tornando-se com uma saúde saudáve ",

            }
        ]

    },



];

let atual = 0;
let perguntaAtual; 
let historiaFinal = "";

function mostraPergunta(){ 
    if(atual >= perguntas.length){
        mostraResultaddo();
        return;
    }
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
    historiaFinal = afirmacoes + " ";
    atual++;
    mostraPergunta(); 
} 

function mostraResultaddo(){
    caixaPerguntas.textContent = "Em 2024"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();


