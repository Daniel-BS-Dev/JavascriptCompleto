class Animal{
    constructor(type){
     if(type)this.type = type;
    }

    getType(){
        return this.type
    }
}

Animal.prototype.type = "unknown";

let dog = new Animal("mammal")
console.log(dog)

let fish = new Animal()
console.log(fish.type)



class Cat extends Animal{
    constructor(name){
        super("mammal")//quando eu uso o extends obricatoriamente tem que usar o super
        this.name = name
    }
}

let cat = new Cat("rex")
console.log(cat)

