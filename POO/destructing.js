const me = { firstname: "Daniel", surname:"Benedito"}

// extraindo os atributos do meu objeto 
const {firstname, surname} = me
console.log(firstname)
console.log(surname)


// a diferença entre o getOwnPropertyNames e Keys
const obj = {};
Object.defineProperties(obj, {
    um: {enumerable: true, value: 1},
    dois: {enumerable: false, value: 2},
});
console.log(Object.keys(obj)); 
console.log(Object.getOwnPropertyNames(obj)); 