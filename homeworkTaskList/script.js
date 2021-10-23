(function() {
    const input  = document.getElementById("txt");
    const ul     = document.querySelector(".itemBox");
    const bntAdd = document.getElementById("btnAdd");
    //const lis    =  ul.getElementsByTagName("li");

    let arrTask = [
        {
            name:"task 1",
            createAt: Date.now(),
            completed: false,
        }
    ]

        function generateListTask(obj, e) {
            let newLi    = document.createElement("li");
            let divTxt   = document.createElement("div");
            let newP     = document.createElement("p");
            let chk      = document.createElement("input");
            let div      = document.createElement("div");
            let btnCreate  = document.createElement("button");
            let btnTrash= document.createElement("button");
            let divEdit  = document.createElement("div");
            let txt      = document.createElement("input");
            let btnEdit  = document.createElement("button");
            let btnRemove= document.createElement("button");
 
            chk.type = `checkbox`;
            chk.setAttribute("data-action", "chk");
            newP.textContent=obj.name;
            divTxt.className="divTxt";
            divTxt.appendChild(chk);
            divTxt.appendChild(newP);

            newLi.appendChild(divTxt);       
            div.className="btns";

            divEdit.setAttribute("class", "containerEdit");
            newLi.appendChild(divEdit);
            txt.setAttribute("type","text");
            divEdit.appendChild(txt);
            btnEdit.textContent="Edit";
            btnEdit.className="edit"
            btnEdit.setAttribute("data-action","btnEdit")
            divEdit.appendChild(btnEdit);

            
            btnRemove.textContent="Cancel";
            btnRemove.className="cancel"
            btnRemove.setAttribute("data-action","btnRemove");
            divEdit.appendChild(btnRemove);

            newLi.appendChild(div);
            btnCreate.innerHTML=`<ion-icon data-action="btnCreate" name="create"></ion-icon> `;
            div.appendChild(btnCreate);
            btnTrash.innerHTML=` <ion-icon data-action="btnTrash" name="trash"></ion-icon>`;
            div.append(btnTrash);
            return newLi;
        }

        function renderTasks() {
            ul.innerHTML =""
            arrTask.forEach(task => {
                ul.appendChild(generateListTask(task))
            })
        }

    function addTask(task) {
       arrTask.push({
           name: task,
           createAt: Date.now(),
           completed:false
       })
    }

    function clickedUl(e) {
        console.log(e.target);
        console.log(e.target.getAttribute("data-action"));
    }

    bntAdd.addEventListener("click",function(e) {
    
        if(input.value == ""){
            alert("Campo está vazio. Preenche-o e tente novamente");
            e.preventDefault();
            input.focus();
        }else{
            addTask(input.value);
            renderTasks()
            input.value=""
            input.focus();
      }
    });

    ul.addEventListener("click",clickedUl)

    renderTasks();
    
    
})()