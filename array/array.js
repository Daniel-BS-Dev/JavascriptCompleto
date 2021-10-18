// empty array
const arr = new Array();
// type
console.log(typeof arr);
// element array
const arr2 = new Array(true, "daniel", 28, new Array(2, 1, 4));
console.log(arr2);
// o primeiro mosta, o primeio array o segundo, o segundo array
console.log(arr2[3][2])


const arr3 = ['daniel', 40, [3,6,9], true];
arr3.push('add');
arr3.unshift('first', 'remove')
console.log(arr3);

const names = ["daniel", "pedro","gil"]
const ages   = [23, 40, 17]

console.log(names[0], ages[0])