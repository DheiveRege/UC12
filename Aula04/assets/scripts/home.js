//pégar elemntos que quero usar

const btn = document.getElementById("btn");
const header = document.getElementById("header");

function otherColor() {
    if (header.style.backgroundColor == "black")
        header.style.backgroundColor = "gray";
    else {
        header.style.backgroundColor = "red";
    }
}
btn.addEventListener("Comprar", otherColor)