(function() {
    

    const email = document.getElementById("txtEmail");
    const button = document.getElementById("btn");
    const feedback = document.getElementById("newsletterFeedback");

    button.addEventListener('click',function () {
        feedback.innerHTML = `O Email ${email.value} Foi Salvo Com Sucesso`;
    })
})()