const calc = {
    value: 0,
    sum(n){
        this.value += n;
        return this 
    }, 
    subtract(n){
        this.value -=  n
        return this
    },
    log(){
        console.log(this.value);
    }
    
}

calc.sum(5).sum(2).subtract(4)//o encadiamento so funciona por conta do return this
console.log(calc.value);