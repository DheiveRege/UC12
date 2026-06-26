const btn = document.getElementById("reset")
const card = [
    "/Projeto-jogo-memoria/assests/images/51FX7BB8gbL._AC_UF894,1000_QL80_.jpg",
    "/Projeto-jogo-memoria/assests/images/bandeira-da-alemanha.jpg",
    "/Projeto-jogo-memoria/assests/images/bandeira-da-franca.jpg",
    "/Projeto-jogo-memoria/assests/images/bandeiradobrasil-2-cke.webp",
    "/Projeto-jogo-memoria/assests/images/Espanha-1111x740.jpg",
    "/Projeto-jogo-memoria/assests/images/Flag_of_Argentina.svg.webp",
    "/Projeto-jogo-memoria/assests/images/Flag_of_Uruguay.svg.webp",
    "/Projeto-jogo-memoria/assests/images/Italia-1111x740.jpg"
];
let blocked = false;
let parsFound = 0;
let moves = 0;

function shuffle(card) {
    for (let i = card.length - 1; i > 0; i--) {
        // Sorteia um índice de 0 a i
        const j = Math.floor(Math.random() * (i + 1));

        // Troca os elementos de lugar
        [card[i], card[j]] = [card[j], card[i]];
    }
    return card;
}

function starGame() {

}

function flipCard(card) {

}

function checkPair() {

}

btn.addEventListener("click", () => {
    
})

