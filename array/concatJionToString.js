let array1 = [1,2,3];
let array2 = [6,7,5];

//transforma meus elementos em string
console.log(array1.toString());

//transforma em string, mas recebe um elemento como separador
console.log(array1.join("-"));

//junta array posso passa novos valores
console.log(array1.concat(array2, 4, 5, ["ola", true]).join("-"));


//usando o concate para fazer um clone de array
let array3 = [].concat(array2);

console.log(array3);



