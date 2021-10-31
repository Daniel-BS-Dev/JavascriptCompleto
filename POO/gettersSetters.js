let type = ""
const allowedTypes = {
    "mammal":true, "reptile":true, "amphibian":true
}

const Dog = {
    name: "rex",
    get type(){
        return type
    },

    set type(newType){
    if(allowedTypes[newType]){// [] serve para acessar o objeto
        return type = newType
      }else{
        throw Error("Type didn't allow")
      }
    }
}

Dog.type = "mammal"
console.log(Dog.type)