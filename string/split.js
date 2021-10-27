// todas as palavras terão uma aspas simples entre elas 
var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ');

console.log(splits);

// apenas tres palavras terão as aspas
myString = 'Hello World. How are you doing?';
splits = myString.split(' ', 3);

console.log(splits);