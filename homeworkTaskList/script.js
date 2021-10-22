(function() {
    const input  = document.getElementById("txt");
    const ul = document.querySelector(".itemBox");
    const bntAdd = document.getElementById("btnAdd");
   console.log(ul)
    bntAdd.addEventListener("click",function() {
        ul.innerHTML += `
        <li>
        <p>${input.value}</p>
        </li>
        `
    })
    
})()