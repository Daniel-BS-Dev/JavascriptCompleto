function generateRandomInteger(max){
    return parseInt(Math.random() * max);

   
}

let array = [];

while(array.length <= 20){
    let randomNumber = generateRandomInteger(30);
    if(array.indexOf(randomNumber) < 0){
        array.push(randomNumber);
    }
}





console.log(array);