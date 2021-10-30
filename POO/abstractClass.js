// classe abstrata não pode ser instanciada so pode ser declarada e herdada
class Animal{
    constructor(type){
       // metodo abstract
        if(this.constructor === Animal){
            throw new Error("Animal is an abstract class")
        }

      this.type = type
    }

    eat(){
        console.log(this.type + " comendo")
    }
}

class Cat extends Animal{
    constructor(name){
        super("mammal")
        this.name = name
    }
    
}

let cat = new Cat("rex")
console.log(cat)
console.log(cat.eat())