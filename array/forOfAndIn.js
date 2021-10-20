const arr = [1,2,3];

const person = {
    name: "Maria",
    idade:"28",
    email:"maria@sever.com"
}


//para percorre um obj
for(let obj in person){
    console.log(person[obj]);
}

//percorre array
for(let n of arr){
    console.log(n);
}