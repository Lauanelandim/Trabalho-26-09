/**
 * //1037
let numero = parseFloat(25.01);
if (0 <= numero && numero <= 25) {
    console.log("Intervalo [0,25]");
} else if (25 < numero && numero <= 50) {
    console.log("Intervalo (25,50]");
} else if (50 < numero && numero <= 75) {
    console.log("Intervalo (50,75]");
} else if (75 < numero && numero <= 100) {
    console.log("Intervalo (75,100]");
} else {
    console.log("Fora de intervalo");
}
 */


let numero = parseFloat(25.01);

if (0 <= numero && numero <= 25) {
    console.log("Intervalo [0,25]");
} else if (25 < numero && numero <= 50) {
    console.log("Intervalo (25,50]");
} else if (50 < numero && numero <= 75) {
    console.log("Intervalo (50,75]");
} else if (75 < numero && numero <= 100) {
    console.log("Intervalo (75,100]");
} else {
    console.log("Fora de intervalo");
}