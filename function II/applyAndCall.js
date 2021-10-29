// usando call serve para mudao escopo do this
function mia() {
    console.log(`${cat.name} spaeks: mia mia`)
}
const cat = {
    name: "migal",
    toSpeak(){
        mia.call(this);
    }
}

cat.toSpeak();

// um outro exemplo com call
function  test(str, n) {
    console.log(this.name);
    console.log(str, n);
}

// meu teste tem o escopo global por esta sendo chamado fora de um objeto
//test("string", 10);

// quando eu uso o call eu quero que o meu this seja esse objeto
test.call({name: "Maria"}, "string", 10)

// outra maneira e com o apply
test.apply({name: "João"}, ["string", 10])

//usando o call o spread operation para array
test.call({name:"Daniel"}, ...["silva",24])

// usando o bind não me preocupo com quem é o this
const test2 = test.bind({name:"Pedro"})
test2("Joaquina",30)
