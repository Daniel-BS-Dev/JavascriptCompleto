const calc = (function() {
    let n =0
   function checkNumber(_n) {
       if(typeof _n !== "number"){
           throw TypeError("Need enter a number")
       }
   }

   function subtract(_n){
      checkNumber(_n)
       n -= _n;
       return this
   }

    function sum(_n) {
        checkNumber(_n)
        n += _n;
        return this
    }

    function log() {
        console.log(n)
        return this
    }

    return {
      subtract,
      sum,
      log
    }
})()

calc.sum("8").log()