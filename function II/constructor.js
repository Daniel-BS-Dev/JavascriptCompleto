// todas as vezes que eu estiver criando uma função construtura eu tenho que criar com letra maiuscula
function Cat(name) {
    this.name = name

    this.toBark = function() {
        console.log(this.name + " latiu")
    }
}

const rex = new Cat("rex")
rex.toBark()