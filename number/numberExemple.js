let number = 123454.4543

console.log(typeof number)
console.log("Fixed "+number.toFixed(2))
console.log("Precision "+number.toPrecision(7))
console.log("Exponential "+number.toExponential());
console.log("Exponential "+number.toExponential(2));
console.log(typeof number.toFixed())

let number2 = 15;

console.log("binary number "+number2.toString(2));
console.log("localString "+ number.toLocaleString());
console.log("Real "+ number.toLocaleString("pt-BR", {style:"currency", currency:"BRL"}));
console.log("Dolar "+ number.toLocaleString("en-US", {style:"currency", currency:"USO"}));
console.log("Euro "+ number.toLocaleString("pt-PT", {style:"currency", currency:"EUR"}));

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

let number3 ="5.66"
console.log("Pode ser convertido = "+isNaN(number3));
