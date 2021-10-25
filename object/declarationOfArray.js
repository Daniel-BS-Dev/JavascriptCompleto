// declaração literal, adiciando o atributo nome
const obj1 = {
    name:"Daniel"
}
console.log(obj1);

// declaração por objeto, adicionando o atributo name
const obj2 = new Object();
obj2.name="Pedro";
console.log(obj2);

// declaração por objeto, adicionando o atributo name
const obj3 = new Object();
obj3["name"] = "Maria"
console.log(obj3);

//tendo acesso ao numero de letra em uma string
const str = "my string";
console.log(str.length);

//Objeto do tipo string, pegando o valor da string
const str2 = new String("my second string");
str2.valueOf();
console.log(str2);

// objeto do tipo number
const num = new Number(20)
num.valueOf();
console.log(num);