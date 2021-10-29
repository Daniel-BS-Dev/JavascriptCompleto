function test() {
    console.log("function expression teste")
    return  "fn expression"
}

const t1 = test();
console.log(t1);

//arrow function

const testArrow = () => {
    console.log("function expression teste")
    return  "fn expression"
}

const t2 = testArrow();
console.log(t2);


// recebendo parametros
const Arrow = (daniel, rosa) => {
    console.log("function expression teste"+daniel+rosa)
    return  "fn expression"
}

const t3 = Arrow("daniel","roas");
console.log(t3);

//se minha arrow function for apenas retorna um valor
const ArrowRetorn = (d, r) => `${d} e ${r} são irmões`

const t4 = ArrowRetorn("daniel","roas");
console.log(t4);
