// minha solução

function media(array){
    if(array == ""){
        return 0;
    }
    let = totalMedia = 0;
    for(let i=0; i<array.length; i++){
        if(typeof array[i] === "string"){
            return 'Invalid number'
            
        }
        totalMedia += array[i];
    }
    return totalMedia / array.length;
}

//console.log(media(["2","6"]));


// solução do prof

(function(){
    function calcularMedia(){
        let total = 0;
        let quantity = arguments.length;

        for(let i=0; i < quantity; i++){
            if(typeof arguments[i] !== 'number'){
                throw Error('only numbers');
            }

            total += arguments[i];
        }
        return total / quantity;
    }

    let media = calcularMedia(2,6);
    console.log(media);
})();

