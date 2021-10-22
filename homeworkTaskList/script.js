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

    function addEventLi(li) {
        li.addEventListener("click", function() {
            console.log(this);
            
        })
        };

        function generateListTask(obj) {
            let newLi = document.createElement("li");
            let newP  = document.createElement("p");
            newP.textContent=obj.name;
            newLi.appendChild(newP);       
            addEventLi(newLi);

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

    bntAdd.addEventListener("click",function() {
    
        addTask(input.value);
        renderTasks()
        input.value=""
        input.focus();
    });

    renderTasks();
    
    
})()