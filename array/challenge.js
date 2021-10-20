function sum() {
    const numbers = Array.from(arguments); // pegando todos os elementos recebidos e transformando em função
   // const numbres = [...arguments]       // esta seria a outa forma de pegar os valores
    return numbers.reduce(function(numberSum, currentNumber){
        return numberSum + currentNumber;
    },0);
    
}

function avarege() {
    return sum(...arguments) / arguments.length;
}

let s = sum(1,2,3);
console.log(avarege(1,2,3));
