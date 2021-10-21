function sum() {
    let numbers = Array.from(arguments);

    return numbers.reduce(function (number, currentNumbers)  {
       return number + currentNumbers;   
    },0)
}

function avarege() {
    return sum(...arguments) / arguments.length;
}



(function() {

    function catchIndece(indice){
        const trHeader = document.querySelector("thead tr");
        const thHeader = trHeader.querySelectorAll("th");

        const th = trHeader.querySelector(`[aluno-nota="${indice}"]`);
        
        const i = [...thHeader].indexOf(th); // transformando o th em array
        return i;
    }
    const grade_media = {
        n1 : catchIndece("n1"),
        n2 : catchIndece("n2"),
        n3 : catchIndece("n3"),
        n4 : catchIndece("n4"),
        m : catchIndece("m")
    }

    const trs = document.querySelectorAll("tbody tr");
    
    let x =0;
    let media = 0;

    while(trs[x]){
        const tds = trs[x].querySelectorAll("td");

        media = avarege(
            parseFloat(tds[grade_media.n1].textContent),
            parseFloat(tds[grade_media.n2].textContent),
            parseFloat(tds[grade_media.n3].textContent),
            parseFloat(tds[grade_media.n4].textContent)
        )

        x++;

        tds[grade_media.m].textContent = media;
    }
})()