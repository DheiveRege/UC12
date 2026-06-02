const h1 = document.querySelector("h1")
const btn = document.querySelector("button")
const div = document.querySelector("div")
const menu = document.getElementById("menu-desktop")
const btn_menu = document.getElementById("btn-menu")

btn.addEventListener("click", () => {
    h1.classList.toggle("text")
})

btn_menu.addEventListener("click", () => {
    menu.classList.toggle("menu-mobile")
})
