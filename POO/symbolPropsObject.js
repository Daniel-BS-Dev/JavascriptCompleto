class Counter {
    constructor(){
        this._symbol = Symbol()
        counter = 0
        this[this._symbol] = 0
    }
    
    increment(){
        this.counter ++
        this[this._symbol] = this[this._symbol] + 1
    }
}

let c1 = new Counter()
c1.increment()
console.log(c1.counter)
console.log(c1)