function sum(){
    let total = 0;
    // quando eu chamo a função argumente eu tenho acesso a tudos os paramentros passados para essa função
    // funciona com aron function
    for(let i=0; i<arguments.length; i++){
        total +=arguments[i];
    }
    return total;
}

console.log(sum(2,4,5,6,7,8,9,10));