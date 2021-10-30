class Animal{
    constructor(type){
     if(type)this.type = type;
    }

    getType(){
        return this.type
    }

}
//quando eu quero colocar metodo ou atributo fora da class
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
    get bark(){
        console.log(`${this.name} esta latindo`)
    }

    walk(distance){
        console.log(`${this.name} andou ${distance}`)
    }
}

// usar o prototype é melhor por que ecomoniza espaço 
Cat.prototype.eat = function() {
        console.log(`${this.name} esta comendo`)
}

let cat = new Cat("rex")
console.log(cat)
console.log(cat.bark)
console.log(cat.walk(2))
console.log(cat.eat())

