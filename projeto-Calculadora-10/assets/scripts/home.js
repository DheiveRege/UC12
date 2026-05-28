
const painel = document.querySelector("h2");


//sinais
const apagar = document.getElementById("c");
const raiz = document.getElementById("raiz");
const soma = document.getElementById("soma");
const menos = document.getElementById("menos");
const porcentagem = document.getElementById("porcentagem");
const divido = document.getElementById("divido");
const ponto = document.getElementById("ponto");
const resultado = document.getElementById("resultado");

//numeros
const zero = document.getElementById("0");
const um = document.getElementById("1");
const dois = document.getElementById("2");
const tres = document.getElementById("3");
const quatro = document.getElementById("4");
const cinco = document.getElementById("5");
const seis = document.getElementById("6");
const sete = document.getElementById("7");
const oito = document.getElementById("8");
const nove = document.getElementById("9");
const btn_numeros = document.querySelectorAll(".btn-numbers");

/*
    for(let i = 0;i < painel.length;i++){

    }
*/




btn_numeros.forEach(botao => {

    botao.addEventListener("click", () => {

        painel.innerHTML += botao.innerHTML
    })
});

apagar.addEventListener("click", () => {
    painel.innerHTML = ""
})

resultado.addEventListener("click", () => {

})