function  Animal(type) {
    if(type) this.type = type;// se tiver type faz isso
}
//criando um metodo
Animal.prototype.toGettype = function() {
    return this.type
}

//criando um atributo
Animal.prototype.type = "unknown"

let dog = new Animal("mammal")
let cat = new Animal("mammal")
let snake = new Animal("reptile")
let fish = new Animal()

console.log(dog.toGettype())
console.log(fish.type)



function Animal(tipo) {
    if (tipo) this.tipo = tipo
}
 
Animal.prototype.obterTipo = function () {
    return this.tipo
}
 
let sapo = {tipo: "anfibio"}
console.log(Animal.prototype.obterTipo.call(sapo))