const array = [10, true, 3, 4, "ola", 6, 7]


// todos os elementos são numeros, se um dos elementos for diferente de number ele me retorna false
let onlyNumber = array.every(function (el) {
   return typeof el === "number";
});

console.log(`Every: ${onlyNumber}`);

// se pelo menos um for numero então ele me retornará veradeiro
let justNumber = array.some(function (el) {
    return typeof el === "number";
 });
 
 console.log(`Some: ${justNumber}`);

 //para filter eu posso passa tres valores o elemento, o indice e o array
 // se eu colocar o retorno false ele retornará um array vazio
 let number = array.filter(function(el, i, arr) {
     return typeof el === "number";
 });

 console.log(`Filter: ${number}`);

 // percorre o array e mostra todos os valores
array.forEach(function(el, i, arr) {
    console.log(`${i} : ${el}`);
});

// retorna uma nova array 
let sum = array.map(function(el, i, arr) {
    return el * el;
});

console.log(`Map: ${sum}`);

