let array = [1,2,3];

// inverte a ordem dos elementos
console.log(array.reverse());

// vai me retorna um unico valor
// acumulador recebe o valor
// ataual valor da sequencia
// i indice do valor
// arr array original
let sum = array.reduce(function(acumulador, atual, i, arr) {
    return acumulador + atual;
    
});

console.log(sum);

// outra maneira de usar o reduce, vai me retorna um string
let arr2 = array.reduce(function(acumulador, atual, i, arr) {
    return acumulador + atual;
    
},"");

let names = ["Daniel", "Paulo", "Maria", "Diego", "Pedro", "Pablo"];
let ordeNames = names.reduce(function (names, namesAtual){
    let firstLetter = namesAtual[0];
    if(names[firstLetter]){
        names[firstLetter] ++;

    }else{
        names[firstLetter] = 1;
    }
   return names;
}, []); // names comeca em 0 por conta do meu {} se ele iria comecar em 1

console.log(ordeNames);