const person = {
    name: "Daniel"
}

// descrição do meu atributo, essa propriedade recebe dois parametros o primeiro é o objeto e o segundo e a propriedade que eu quero testar
console.log(Object.getOwnPropertyDescriptor(person, "name"))
person.name = "new name"

// esse metodo serve para definir uma atributo, se o atributo ja existe substitui senão cria
Object.defineProperty(person, "surname",{
    value: "Benedito da Silva",
    enumerable: true, // mostra o sobrenome tbm
    configurable: true // permite fazer modificação ou seja deletar
})



// eu não consigo trocar o meu sobrenome 
console.log(Object.getOwnPropertyDescriptor(person, "surname"))
person.surname = "Silva"

//deletando o surname
delete person.surname

for(let prop in person){
    console.log(prop)
}