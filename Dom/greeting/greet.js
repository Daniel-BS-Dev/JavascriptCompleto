(function (){
    const usuarioName = "";
    const name = document.querySelector(".top-bar p");
    const container = document.querySelector(".hero-content");

    

    if(usuarioName){
            name.innerHTML = name.textContent + usuarioName;
    }else{
        //parentElement eu estou acessando o pai do meu elemento
        // children eu acesso os filhos
        console.log(container.children);
        name.parentElement.style.display="none";

        // para remover

        name.remove(); // não funciona no internet
    }
})()