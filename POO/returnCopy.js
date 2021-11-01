;(function() {
    let arr = []
    
    this.person = {
        get username(){
             if(arr.length){//se o array maior que 0
               return console.log(arr[arr.length -1])
             }
        },
        // retornando uma copia de array
        get usernames(){
            return console.log([].concat(arr))
        },

        set username(_username){
            if(arr.indexOf(_username) < 0){
                arr.push(_username)
            }

        }
    }
    
})();

person.username = "test One"
person.username = "test Second"
person.username = "test Third"
person.usernames
person.username 


