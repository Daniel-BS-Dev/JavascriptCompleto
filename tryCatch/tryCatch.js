function sum(n1, n2){
if(typeof n1 !== "number" || typeof n2 !== "number"){
    throw Error('Invalid Sum');
  }
return n1 + n2;
}

try{
let number = sum(5,'a');
console.log(number);
}catch(e){
    console.log(e);
}finally{
    console.log('bloco finalizado')
}
