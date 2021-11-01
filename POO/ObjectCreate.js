const father = {
    name: "father",
    toSpeak: function(msg) {
        console.log(`${this.name} esta falando`)
    }
}

// criando object com Object

const child = Object.create(father, {name: {value:"filho"}})