const names = ['Daniel','Paula','João','Andre'];
const Car = {
    model:'Fiat',
    price:40.000,
    
}

const Car1 = {
     model:'Uno',
     age:20.000,
    
}
// colocando as pessoas de forma indireta
const cars = [Car, Car1]
console.log(cars);

//criando um objeto de varias pessoas, colocando direto no array
const person = [
    {name:'daniel', age:40, email:'Daniel@gmail.com'},
    {name:'Pedro', age:30, email:'PEDRO@gmail.com'},
    {name:'daniela', age:10, email:'Daniela@gmail.com'}
]

for(let i=0; i<person.length; i++){
  console.log(`Olá ${person[i].name} voce possui ${person[i].age} seu email é ${person[i].email}`);
}