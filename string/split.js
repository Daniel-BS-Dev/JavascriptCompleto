// todas as palavras terão uma aspas simples entre elas 
var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ');

console.log(splits);

// apenas tres palavras terão as aspas
myString = 'Hello World. How are you doing?';
splits = myString.split(' ', 3);

console.log(splits);

function username(name) {
   name = name.trim()
    let firstSpace = name.split(" ");
   if(firstSpace.length === 1){
       return name;
   }

   let firstName = firstSpace.shift();

    return firstSpace.join(" ") +","+ firstName
}

console.log(username(" daniel"));
console.log(username(" daniel benedito"));
console.log(username(" daniel benedito da silva"));