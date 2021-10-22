(function() {
    const input  = document.getElementById("txt");
    const ul     = document.querySelector(".itemBox");
    const bntAdd = document.getElementById("btnAdd");
    const lis    =  ul.getElementsByTagName("li");

    function addTask(task) {
        let newLi = document.createElement("li");
        let newP  = document.createElement("p");
        newP.textContent=task;
        //para adicianar uma classe
        //newLi.className = "nome classe"
        newLi.appendChild(newP);
        ul.appendChild(newLi);

        newLi.addEventListener("click", function() {
            console.log(this);
            console.log(this.textContent); //pega o texto com as formatações
            console.log(this.innerHTML);   // pegar com o primeiro pai
            console.log(this.innerText);   // pega o texto sem formatação
            console.log(this.outerHTML);   // pega ate o segundo filho
        })
    }

    bntAdd.addEventListener("click",function() {
        /*ul.innerHTML += `
        <li>
        <p>${input.value}</p>
        </li>
        `*/
        addTask(input.value);
        input.value=""
        input.focus();
    });

    [...lis].forEach(element => {
        element.addEventListener("click", function() {
            console.log(this);
        })
    });
    
    
})()