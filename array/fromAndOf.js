// serve para criar uma array a partir de outro array ou um objeto que parece um array

const arr1 = new Array(1,2,3);
console.log(arr1);

const arr2 = Array.from(arr1);
console.log(arr2);

// serve pra cria array e util quando vou passar apenas um elemento
const arr3 = Array.of(3);
console.log(arr3);