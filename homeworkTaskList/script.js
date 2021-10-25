(function() {
    const input  = document.getElementById("txt");
    const ul     = document.querySelector(".itemBox");
    const bntAdd = document.getElementById("btnAdd");
    const lis    =  ul.getElementsByTagName("li");


    let arrTask = getSavedData();
       
    function getSavedData() {

        let tasksData = localStorage.getItem("tasks");
        console.log(tasksData)
        tasksData = JSON.parse(tasksData);
        console.log(tasksData)

        return tasksData && tasksData.length ? tasksData : [
         {
            name:"task 1",
            createAt: Date.now(),
            completed: false,
          }
       ]
     }

    function setNewData() {
        localStorage.setItem("tasks",JSON.stringify(arrTask));
    }

    setNewData()

        function generateListTask(obj, e) {
            let newLi    = document.createElement("li");
            let divTxt   = document.createElement("div");
            let newP     = document.createElement("p");
            let chk      = document.createElement("input");
            let div      = document.createElement("div");
            let btnCreate= document.createElement("button");
            let btnTrash= document.createElement("button");
            let divEdit  = document.createElement("div");
            let txt      = document.createElement("input");
            let btnEdit  = document.createElement("button");
            let btnRemove= document.createElement("button");
 
            chk.type = `checkbox`;
            chk.className="chk";
            chk.setAttribute("data-action", "chk");
            newP.textContent=obj.name;
            newP.setAttribute("class","tagP");
            divTxt.className="divTxt";
            divTxt.appendChild(chk);
            divTxt.appendChild(newP);

            newLi.appendChild(divTxt);       
            div.className="btns";

            divEdit.setAttribute("class", "containerEdit");
            newLi.appendChild(divEdit);
            txt.setAttribute("type","text");
            txt.value = obj.name;
            txt.setAttribute("class","inputValue");
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
            btnCreate.innerHTML=`<ion-icon class="create" data-action="btnCreate" name="create"></ion-icon> `;
            div.appendChild(btnCreate);
            btnTrash.innerHTML=` <ion-icon class="trash" data-action="btnTrash" name="trash"></ion-icon>`;
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
       setNewData()
    }

    function clickedUl(e) {
        const dataAction = e.target.getAttribute("data-action");
        if(!dataAction) return;

        let currentLi = e.target;
        while(currentLi.nodeName !== "LI"){
            currentLi = currentLi.parentElement;
        }
        
        const currentLiIndex = [...lis].indexOf(currentLi);
        

        const actions = {
            btnCreate:function() {
                const editInput = currentLi.querySelector(".inputValue");
               
                const btns = currentLi.getElementsByClassName("btns");
                [...btns].forEach(btn =>{
                    btn.style.pointerEvents= "none";
                })
                const chk = document.querySelector(".chk");
                chk.style.pointerEvents="none";
                input.style.pointerEvents="none";
                bntAdd.style.pointerEvents="none";

                
                [...ul.querySelectorAll(".containerEdit")].forEach(container => {
                    container.removeAttribute("style");
                })

                const containerEdit = currentLi.querySelector(".containerEdit");
                containerEdit.style.display="flex";
                editInput.focus();
            },

            btnEdit:function(){
                const editInput = currentLi.querySelector(".inputValue");
            
                if(editInput.value !== ""){
                   arrTask[currentLiIndex].name = editInput.value;
                   renderTasks();
                   input.style.pointerEvents="";
                   bntAdd.style.pointerEvents="";
                   input.focus();


                }else{
                    alert("Campo vazio");
                    editInput.focus();
                    return
                }
                setNewData();
            },

            btnRemove:function() {
                const cancel = currentLi.querySelector(".cancel");
                cancel.removeAttribute("style");
                renderTasks();
                input.style.pointerEvents="";
                bntAdd.style.pointerEvents="";
                input.focus();
            },

            chk:function() {
                arrTask[currentLiIndex].completed = !arrTask[currentLiIndex].completed
            },

            btnTrash:function () {
                let response = confirm("Deseja Deletar")
                if(!response) return;
                arrTask.splice(currentLiIndex, 1)
                renderTasks();
                input.focus();
                setNewData();
            }

        }
        if(actions[dataAction]){
            actions[dataAction]()
        }
    }

    bntAdd.addEventListener("click",function(e) {
    
        if(input.value == ""){
            alert("Campo está vazio. Preenche-o e tente novamente");
            input.focus();
            return;
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