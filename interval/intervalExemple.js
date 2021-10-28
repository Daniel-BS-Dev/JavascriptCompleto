(function() {
    let n = 1;
    setTimeout(function() {
        console.log("setTimeout executara depois de 1 segundo")
    },1000);

    const setClear = setInterval(() => {
        console.log("setInterval n:"+ n++)
        if(n > 15){
          clearInterval(setClear)
        }
    },1000);

})()