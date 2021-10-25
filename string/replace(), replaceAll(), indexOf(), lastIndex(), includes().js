let str1 = "my string mamania";
// substituindo a primeira  letra m por o
console.log(str1.replace("m", "o"));

let str2 = "I am your you are mine"
//substituindo todas as letras m por o
console.log(str2.replace(/m/g, "0"));

//retornando a posição de um elemento
console.log(str2.indexOf("mine"));

//retonando a posição do ultimo e do meu elemento, eu procuro um elemento que não existe ele me retorna -1
console.log(str2.lastIndexOf("e"));