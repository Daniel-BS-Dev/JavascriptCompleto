const numeros = [1,3,4,1,4,5,3,5,8,9];
//const onlyNumber = [1,3,4,5,8,9];


const numerosUnicos = numeros.reduce(function(numerosUnicos, numerosAtual){
  if(numerosUnicos.indexOf(numerosAtual) < 0){
      numerosUnicos.push(numerosAtual);
 }
  return numerosUnicos;
},[]);

console.log(numerosUnicos);