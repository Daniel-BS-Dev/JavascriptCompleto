// essa forma não esta correta 
const rex = {
    name:"rex",
    toBark(){

    },
    toWalk(){

    }

}

const toto = {
    name:"rex",
    toBark(){

    },
    toWalk(){
        
    }

}

// maneira certa
function  createDog(name) {
    let position = 0;
    return {
        name,//como o meu name tem o mesmo nome da função então ele e omitido
        toBark(){
            console.log(this.name+ " esta latindo")
        },
        toWalk(distance){
            position += distance;
            console.log(this.name+ " andou "+ distance+ "m")
        }, 
        catchPosition() {
            return position;
        }
    }
 }
const bob = createDog("Rex")
bob.toWalk(60)
bob.toWalk(20)
console.log(bob.catchPosition())
console.log(bob.toBark());



