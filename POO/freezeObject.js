const obj = {
    prop1: "prop1",
    prop2: "prop2"
}

const objFreeze = {...obj}
const objSeal = {...obj}
const objPrevent = {...obj}

Object.freeze(objFreeze) //não consegui criar atualizar remover
Object.seal(objSeal)// não pode criar, pode atualizar, não pode remover
Object.preventExtensions(objPrevent)// não pode criar


// function recurciva para congelar um objeto
function deepFreeze(obj) {
    const propNames = Object.getOwnPropertyNames(obj) // peguei todos os atributos

    propNames.forEach(name =>{
        let prop = obj[name]

        if(typeof prop === "object" && prop !== null){
            deepFreeze(prop)
        }
    })

    return Object.freeze(obj)
}

//fazendo um clone
const obj2 = {
    foo: "bar",
    internal: {
        array: [1,2,3],
        internalObject:{teste:"test"}
    }
}

deepFreeze(obj2)
obj2.foo = "alterado"
obj2.internal.array.push("alterado")
obj2.internalObject.teste = "alterado"

console.log(obj2)