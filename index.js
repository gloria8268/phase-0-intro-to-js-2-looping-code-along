// Code your solutions in this file
function writeCards(x) {
    let arrayCards = []
    for (let i = 0; i < x.length; i++) {
        arrayCards.push (`Thank you, ${x[i]}, for the wonderful surprise gift!`);
    }
    return arrayCards
}
writeCards(["Guadalupe", "Ollie", "Aki"])

function countDown (x) {
    for (let i = x; i >=0; i--){
        console.log(i);
    }
}
countDown(10)

