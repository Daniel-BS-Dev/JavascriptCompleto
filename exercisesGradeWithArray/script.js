function sum() {
    let numbers = Array.from(arguments);

    return numbers.reduce(function (number, currentNumbers)  {
       return number + currentNumbers;   
    },0)
}

function avarege() {
        return sum(...arguments) / arguments.length;
    }
    
    
    
(function () {
    const studants = [
        { name: "Daniel", grade:[ 10,  3,   7.5,  3 ]},
        { name: "Maria",  grade:[ 10,  9,   3,   9.5 ]},
        { name: "João",   grade:[ 10,  4.5, 1,   3.5 ]},
        { name: "Joana",  grade:[ 1,   3,   9,   1.5 ]},
        { name: "José",   grade:[ 10,  4.5, 7,   3 ]},
        { name: "Arnaldo",grade:[ 10,  4.5, 7,   3 ]},
        { name: "Lucas",  grade:[ 4.5, 9,   8,   3 ]},
        { name: "Luana",  grade:[ 3,   7,   9,   3 ]},
        { name: "Beatriz",grade:[ 10,  4,   7,   9 ]},
        { name: "Sergio", grade:[ 4.5, 9.5, 10,  2 ]}
];

studants.forEach(studant => {
    studant.media = avarege(...studant.grade)

})


/* outra manira de fazer isso
const html = studants.map(studant => `
<tr>
<td>${studant.name}</td>
<td>${studant.grade[0]}</td>
<td>${studant.grade[1]}</td>
<td>${studant.grade[2]}</td>
<td>${studant.grade[3]}</td>
<td>${studant.media}</td>
</tr>
`).join("")
*/
const html = studants.map(studant =>`
<tr>
<td>${studant.name}</td>
${studant.grade.map(n => ` <td>${n}</td>` ).join("")}
<td class="${studant.media < 6 ? "disapproved" : "approved"}">${studant.media}</td>
</tr>
`).join("");

document.querySelector(".tableBody").innerHTML = html;

})()