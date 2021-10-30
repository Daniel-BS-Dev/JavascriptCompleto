if(String.prototype.replaceAll){
    String.prototype.replaceAll = function(search, change) {
        console.log(this)
        console.log(this.valueOf())
        return this.valueOf().split(search).join(change)
    }
}