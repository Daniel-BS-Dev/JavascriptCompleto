let array = [4, 5,20, 35, 4, 5]

// vai me retornar a posição do index encontrado, quando ele não encontra me retonará -1
console.log(array.indexOf(5));

// retorna o ultimo valor encontrado
console.log(array.lastIndexOf(5));

//verifica se tem o elemento no array, retorna false se não existe e true se existe
console.log(array.includes(4));

//vai retorna sempre o primeiro elemento encontrado, se não encontrar retorna undefine
console.log(array.find(function(el) {
    return el > 10;
}));

//mostra o index do valor encontrado, se não encontra retorna -1
console.log(array.findIndex(function(el) {
    return el > 10;
}))