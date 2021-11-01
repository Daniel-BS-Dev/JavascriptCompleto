const myMap = new Map()
const myObj = new Object()

myMap.prop1 = "prop 1"

myMap.set("prop1", "prop 1")
console.log(myMap.get("prop1"))

// criando um map
const myMap2= new Map([[0, "zero"], [1, "um"]])
console.log(myMap2.get(0))// pega o valor
console.log(myMap2.has(1))// verifica se tem a key
console.log(myMap2.keys())//retorna as chaves
console.log(myMap2.values())// retorna o value do objeto
console.log(myMap2.entries())// retorna um array de array key e value

let keys = myMap2.keys()

for(let k of keys){
    console.log(k)
}

let _counter = new WeakMap()
class Counter{
    constructor(){
        _counter.set(this, 0)
    }
    increment(){
        _counter.set(this, _counter.get(this)+1)
        //console.log(this.counter)
        console.log(_counter.get(this))

    }

    get c(){
       return _counter.get(this)
    }
}



let c1 = new Counter()
console.log(c1.increment())
console.log(c1.increment())
console.log(c1.increment())
console.log(c1.c)