const display = document.getElementById("display");

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");

const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnSomar = document.getElementById("btnSomar");
const btnMenos = document.getElementById("btnMenos");

const btnIgual = document.getElementById("btnIgual");
const btnMult = document.getElementById("btnMult");
const btnC = document.getElementById("btnC");
const btnDiv = document.getElementById("btnDiv");

let valorAtual = "";
let valorAnterior ="";
let operacao = null;

function atualizarDisplay(){
    if (valorAtual === ""){
        display.value = "0";
    }else{
        display.value = valorAtual;
    }
}
btnC.addEventListener("click",
    function(){
        valorAtual = ""
        valorAnterior = ""
        operacao = null
        atualizarDisplay()
    }
)
function adicionarNumero(numero){
    valorAtual = valorAtual + numero;
    atualizarDisplay();
}
btn9.addEventListener("click",
    function (){
        adicionarNumero("9")
    }
)

btn8.addEventListener("click",
    function (){
        adicionarNumero("8")
    }
)

btn7.addEventListener("click",
    function (){
        adicionarNumero("7")
    }
)

btn6.addEventListener("click",
    function (){
        adicionarNumero("6")
    }
)

btn5.addEventListener("click",
    function (){
        adicionarNumero("5")
    }
)

btn4.addEventListener("click",
    function (){
        adicionarNumero("4")
    }
)

btn3.addEventListener("click",
    function (){
        adicionarNumero("3")
    }
)

btn9.addEventListener("click",
    function (){
        adicionarNumero("2")
    }
)

btn1.addEventListener("click",
    function (){
        adicionarNumero("1")
    }
)
btn0.addEventListener("click",
    function (){
        adicionarNumero("0")
    }
)


function selecionarOperacao(operando){
    if(valorAtual ===""){
        return;
    }
    valorAnterior = valorAtual;
    operando = operacao
    valorAtual = "",
}
btnSomar.addEventListener("click", function(){
    
        selecionarOperacao("+");
    }
)
function calcular(){

    const numeroAnterior = Number(valorAnterior);
    const numeroAtual = Number(valorAtual);

    let resultado;

    if(operacao === "+"){
        resultado = numeroAnterior + numeroAtual;
    }

    valorAtual = String(resultado);
    valorAnterior = "";
    operacao = null;

}

