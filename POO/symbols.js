// não pode ser distanciado com new
const NOME = Symbol()
console.log(typeof NOME)

let n = 0
const user = {
    ["test" + (++n)] : "test" + n,
    ["test" + (++n)] : "test" + n,
    [NOME]: "Daniel com symbol",
    "name": "Daniel com string",
    3:"Daniel com numero"
}

console.log(user)
console.log(user[NOME])

let test = Object.getOwnPropertySymbols(user)
console.log(test[0])
// acessar o conteudo do meu symbol
console.log(user[test[0]])
// pegando o tipo
console.log(typeof user[test[0]])
// alterando o valor
user[test[0]] = "nome alterando o valor"
console.log(user)