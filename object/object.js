// declaração de object
const person = new Object();
person.name="Daniel";
person.age=40;
console.log(person);// name e idade
console.log(person.name);// nome



// sintaxe literal
const Person = {
//proprie  //valores
    nome: "Daniel",
    age: 40

}
console.log(person);

// pecorrendo um object
for(let o in person){
    console.log(o) // pega as propriedades
    console.log(person[o])// pega os valores
}