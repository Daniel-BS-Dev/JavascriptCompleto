const obj1 = {
    name: "Daniel"
}

const obj2 = {
    name: "Maria"
}

Object.freeze(obj1)
console.log(Object.isFrozen(obj1))
console.log(Object.isFrozen(obj2))