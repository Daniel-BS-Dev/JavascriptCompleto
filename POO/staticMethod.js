class Dog{
    constructor(name){
        this.name = name
    }

    //metodo estatico. não faz parte do meu objeto, é sim da minha class
      static eat(){
        console.log("comendo")
    }
}

console.log(Dog.eat())