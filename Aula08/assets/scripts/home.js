//pégar elemntos que quero usar

//captura elemento por id
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

//btn 4
const btn4 = document.getElementById("btn4");
const link = document.getElementById("a01");

//btn 5 
const btn5 = document.getElementById("btn5");
const img = document.getElementById("img01");
const text_img = document.getElementById(`text-img`);
const imgTroll = document.getElementById("troll")

//captura elemento por tag
const header = document.querySelector("header");
//selectorall = selecionar todos os elemntos
//armazena dentro de um array
const titulos = document.querySelectorAll("h1");
const texto = document.getElementById("h1-main");


//add um evento ao elemnto e precisa passar 2 parametros, o btn ou oque 
// quiser e o outro a fun
btn.addEventListener("click", () => {
    if (header.style.backgroundColor == "gray")
        header.style.backgroundColor = "red";
    else {
        header.style.backgroundColor = "gray";
    }
})

btn2.addEventListener("click", () => {
    for (let titulo of titulos) {
        titulo.style.color = "red"
    }

})

btn3.addEventListener("click", () => {
    /*
       if (texto.textContent == "Aqui tem ofertas incriveis") {
           texto.textContent = "Trocou o texto!"
       } else {
           texto.textContent = "Aqui tem ofertas incriveis"
       }
       */

    if (texto.innerHTML == "Aqui tem ofertas <span>incriveis</span>") {
        texto.innerHTML = "Aqui tem ofertas <span>Bostil</span>"
    } else {
        texto.innerHTML = "Aqui tem ofertas <span>incriveis</span>"
    }
})
btn4.addEventListener("click", () => {
    if (link.getAttribute("href") == "https://www.olx.com.br/") {
        console.log("leo");
        link.setAttribute("href", "https://www.linkedin.com/in/leonardo-de-souza-09361a277/");


    } else {
        console.log("olx");
        link.setAttribute("href", "https://www.olx.com.br/")
        tro
    }
})

/* 

crie um card com imagem e um botao 
ao clicar no botao, faça que a imagem troca wow

        const btnSalva = addEventListener("click", () => {
            imgTroll.style.opacity = 1
            imgTroll.setAttribute("src", "/Aula08/assets/images/clique.png")
        })
*/


btn5.addEventListener("click", () => {
    if (img.getAttribute("src") == "/Aula08/assets/images/produto02.webp") {
        console.log("perfeito");
        img.setAttribute("src", "/Aula08/assets/images/img-perfeita.jpg")
        text_img.innerHTML = `oportunidade boa,chefe  <button id="btn6" class="main-btn-buy">ver algo incrivel</button>`;

    } else {
        console.log("lixo");
        img.setAttribute("src", "/Aula08/assets/images/produto02.webp")

    }

})

