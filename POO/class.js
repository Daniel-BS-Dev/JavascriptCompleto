// toda classe vai precisa de um constructor
class Animal{
    constructor(type){
       if(type)this.type = type
    }

    getType(){
        return this.type
    }
}

Animal.prototype.type = "unknown"

let dog = new Animal("mammal")
console.log(dog)

let cat = new Animal("")
console.log(cat.type)