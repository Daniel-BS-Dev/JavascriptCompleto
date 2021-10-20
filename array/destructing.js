const arr = [10,20,30];

//destructing n1 é o nome da minha variavel, pego o primeiro numero do meu array
const [n1] = arr;

console.log(n1);

// pego todos os valores do meu array
const [...n2] = arr;
console.log(n2);

//pegando o primeiro e o ultimo elemento
const [n3,  ,n4] = arr;
console.log(n3);
console.log(n4);