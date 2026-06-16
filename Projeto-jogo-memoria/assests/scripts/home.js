
const blocked = false


const array = [
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img"),
document.createElement("img")
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Sorteia um índice de 0 a i
        const j = Math.floor(Math.random() * (i + 1));

        // Troca os elementos de lugar
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;


}

function starGame() {

}

function flipCard(card) {

}

function checkPair() {

}



