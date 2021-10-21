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
    const alunos = [
        { nome: "Daniel", n1: 10, n2: 3, n3: 7.5, n4: 3 },
        { nome: "Maria", n1: 10, n2: 9, n3: 3, n4: 9.5 },
        { nome: "João", n1: 10, n2: 4.5, n3: 1, n4: 3.5 },
        { nome: "Joana", n1: 1, n2: 3, n3: 9, n4: 1.5 },
        { nome: "José", n1: 10, n2: 4.5, n3: 7, n4: 3 },
        { nome: "Arnaldo", n1: 10, n2: 4.5, n3: 7, n4: 3 },
        { nome: "Lucas", n1: 4.5, n2: 9, n3: 8, n4: 3 },
        { nome: "Luana", n1: 3, n2: 7, n3: 9, n4: 3 },
        { nome: "Beatriz", n1: 10, n2: 4, n3: 7, n4: 9 },
        { nome: "Sergio", n1: 4.5, n2: 9.5, n3: 10, n4: 2 }
];

alunos.forEach(aluno => {
    aluno.media = avarege(aluno.n1,aluno.n2,aluno.n3,aluno.n4)
})

const html = alunos.map(aluno => `
<tr>
<td>${aluno.nome}</td>
<td>${aluno.n1}</td>
<td>${aluno.n2}</td>
<td>${aluno.n3}</td>
<td>${aluno.n4}</td>
<td>${aluno.media}</td>
</tr>
`).join("")

document.querySelector(".tableBody").innerHTML = html;

})()