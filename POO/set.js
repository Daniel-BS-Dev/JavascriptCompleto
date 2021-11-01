// set não tem valores repetidos
const _set = new Set();
const _weakset = new WeakSet();

_set.add(1)
_set.add(2)
_set.add(3)
_set.add(6)

console.log(_set.has(6))
console.log(_set.size)
_set.delete(6)
console.log(_set.size)

for(let s of _set){
    console.log(s)
}