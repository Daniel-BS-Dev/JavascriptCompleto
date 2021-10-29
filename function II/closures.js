// consta que vai receber uma função auto invocavel
const test = (function() {
    return "meu retorno"
})()

console.log(test);


//minha função auto invocavel retornando outra function
const test2 = (function(){
    let n = 0; // essa variavel será refletida na minha função
  return function testInterno() {
      console.log("testeInterno chamado", ++n)
      return "retorno de testeInterno " + n
  }
})();

console.log(test2())

// outra maneira de declara minha função
const test3 = (function(n){
  return function testInterno() {
      console.log("testeInterno chamado", ++n)
      return "retorno de testeInterno " + n
  }
})(10);//10 será o meu n

console.log(test3())