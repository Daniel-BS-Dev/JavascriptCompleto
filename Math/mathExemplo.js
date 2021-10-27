let array = [101,2,34,54,54]

console.log("Max: "+ Math.max(1,4,3,6,5,4,5));
console.log("Min: "+ Math.min(...array));
console.log("Round: "+ Math.round(45.4));
console.log("Floor: "+ Math.floor(45.4));
console.log("Ceil: "+ Math.ceil(45.4));
console.log("Pow: "+ Math.pow(4, 2));
console.log("Raiz: "+ Math.sqrt(49));
console.log("Cubica: "+ Math.cbrt(8));

// radom me retornando um numero de 0 a 60
console.log(Math.floor(Math.random()* 3))

//retornando um numero random de 5 a 10
function randomNumber(start, end, interger) {
    start += 0// se não receber parametro
    end += 0
    interger += true

let r = Math.random()* (end - start + 1) + start;
return interger ? parseInt(r): r;
}

console.log(randomNumber(5,10, false))
