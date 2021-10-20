let array = [1,2,38,4,3];

// adiciona um novo elemento e remove elemento
// remove os elementos e retorna os elementos removidos, pode receber 2 valores como o slice apos o segundo valor eu posso adicionar
let arrayS = array.splice(1, 1, "mundo");
console.log(array);
console.log(arrayS);

//acrescentar valores no final do array
array.push(24,32, "ola", true);
console.log(`Push: ${array}`);

//acrescenta no inicio do array
array.unshift(90, true);
console.log(`Unshift: ${array}`);

//remove o ultimo elemento do array
array.pop();
console.log(`Pop: ${array}`);

//remove o primeiro elemento do array
array.shift();
console.log(`Shift: ${array}`);

//faz um corte do meu array, primeiro valor indice inicial, segundo indice final, se eu passa apenas um valor ele ira ate o final
console.log(`Slice: ${array.slice(4, 7)}`);







