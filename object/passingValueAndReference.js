
// passagem por valor 
let x = 10;

function  changeX(n) {
    n++; 
    console.log("x interno",n);
}

changeX(x)
console.log("x externo",x)
// interno 11
// extrno 10


//passando por referencia. O mesmo acontece com objeto
let a=[10];

function array(a) {
    a.push(11);
    console.log("x interno", a);
}

array(a);
console.log("x externo", a);
//x interno [ 10, 11 ]
//x externo [ 10, 11 ]




    
