(function (){
    const usuarioName = "daniel";

    if(usuarioName){
        // createElement cria um elemento
        const topBarElement = document.createElement("div");
        // className é o nome da minha classe
        topBarElement.className = "top-bar";
        // criando elementos da minha div
        topBarElement.innerHTML = `<p> Olá, <b>${usuarioName}</b> </p>`
    
        //para inserir o meu elemento no html
        // elementopai.insertBefore(novoElemento, elementoBaixo)
        const father = document.querySelector('.hero');
        father.insertBefore(topBarElement, father.firstElementChild);
    }
    
  
})()