// metodo fora do objeto
function toSpeak() {
    console.log(`${this.name} speaks: mu mu`)
}
const cow = {
    name: "mila",
    toSpeak
}
cow.toSpeak();


//metodo no objeto
const dog = {
    name: "rex",
    toSpeak: function() {
        console.log(`${this.name} speaks: au au`)
    }
}
dog.toSpeak();


//omitindo o nome function
const cat = {
    name: "migal",
    toSpeak() {
        console.log(`${this.name} speaks: mia mia`)
    }
}
cat.toSpeak();

