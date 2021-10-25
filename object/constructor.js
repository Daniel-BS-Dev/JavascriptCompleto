// construtora
function  Task() {
    this.name = "task1"
    this.createAt = new Date()
}

const task1 = new Task();
console.log(task1);

//passando o nome pelo o construtor
function Person(name, age, birth) {
    this.name = name;
    this.age = age;
    this.updateAt = null;
    this.birth = birth;

    //metodo para mudar o nome
    this.changeName = function changeName(newName) {
        this.name = newName;
        this.updateAt = new Date();
    }
}

//usando o metodo get
//passando o nome pelo o construtor
function Person1(name, age, birth) {
    "use strict" //-> evita que o Person1 seja chamado sem o uso do new

    let _name = name;

    this.age = age;
    this.updateAt = null;
    this.birth = birth;

    //metodo para mudar o nome
    this.changeName = function changeName(newName) {
        _name = newName;
        this.updateAt = new Date();
    }

    this.getName = function() {
        return _name;
    }
}

const person = new Person("Pedro", 24, "04/04/1997");
person.changeName("new name");
console.log(person);

const person1 = new Person1("Pedro", 24, "04/04/1997");
person1.changeName("new name");
console.log(person1.getName()); 




