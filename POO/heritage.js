function Animal(type){
    if(type) this.type = type


    Animal.prototype.toGetType = function() {
        return this.type
    }

    Animal.prototype.type = "unknown"
}

function Dog(name, type){
  this.name = name
  Animal.call(this, type)//herança
}

const dog = new Dog("Rex", "mammal")
console.log(dog )

Dog.prototype = new Animal()
Dog.prototype.constructor = Dog