const arr = [1,2,3];

function sum() {
    console.log(arguments);
}

sum(1,2,3,4);
sum(arr);
sum(...[1,2,3])
sum(...arr)