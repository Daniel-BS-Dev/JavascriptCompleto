const obj = {
    a: "a",
    b: "b",
    c: "c"
}

const obj2 = {
    a: "a2",
    b: "b2",
    c: "c2"
}

// recebe um obj de origem e o outro de destino, so copia metodo inumeravez
const father = {
    name: "father",
    toSpeak: function(msg) {
        console.log(`${this.name} esta falando`)
    }
}

// criando object com Object

const children = Object.create(father, {name: {value:"filho", enumerable: true}})
const child = Object.assign(obj, children)
obj.d = "d"//os dois objetos serão nodificados
console.log(child)

// apenas um vai receber a notificação
const cover = Object.assign({}, obj, obj2) 
console.log(cover)

// outra maneira de clonar objeto
const obj3 = {...obj, ...obj2}
console.log(obj3)