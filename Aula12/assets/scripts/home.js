//parametro in emgles
const div = document.querySelector("div")
const h1 = document.querySelector("h1")
const ul = document.querySelector("ul")
const main = document.querySelector("main")

//inputs
const input = document.getElementById("input")

//buttons
const btn = document.getElementById("btn")
const btn_remove = document.getElementById("remove")
//btn titulo
const change_title = document.getElementById("change-title")
const create_class = document.getElementById("create-class")
//btn list
const list_add = document.getElementById("list-add")
const remove_list = document.getElementById("remove-list")




btn.addEventListener("click", () => {
    const paragrafo = document.createElement("p")
    console.log(`bosta`);
    paragrafo.textContent = "Criei lixo"

    div.appendChild(paragrafo)
})

btn_remove.addEventListener("click", () => {
    const paragrafos = div.querySelectorAll("p")
    if (paragrafos.length > 0) {
        paragrafos[0].remove(paragrafos)
        console.log(`bonjuir`);
    }
})

change_title.addEventListener("click", () => {
    h1.textContent = "m"
    console.log("Trocar");
})

create_class.addEventListener("click", () => {
    const grafo = document.createElement("P")
    grafo.textContent = "Criei lixo"
    main.appendChild(grafo)
    console.log("testado");
})

list_add.addEventListener("click", () => {
    const list = document.createElement("li")
    list.textContent = "Criei lixo"
    ul.appendChild(list)
    console.log("testado");
})

remove_list.addEventListener("click", () => {
    const list = main.querySelectorAll("li")
    if (list.length > 0) {
        list[list.length - 1].remove(list)
        console.log(`bonjuir`);
    }
})

input.addEventListener("change", () => {
    h1.textContent = input.value
})  
