function teste(cb){
    cb()
}

teste(function(){
    console.log("função anonima de callback");
});

// aron function
const test = function(cb){
    if(typeof cb === "function"){
    cb(30);
    }
}

const fn = function(param){
    console.log(param);
}

test(fn);