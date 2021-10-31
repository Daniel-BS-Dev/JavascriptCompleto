;(function(params) {
    let _quantity = 0;
    let counter = 0;

    this.product = {
        get quantity(){
            console.log(`quantidade foi consultada ${++counter} vez${counter>1? "es":""}`)
          return _quantity
        },
        set quantity(value){
            if(value > 0){
              _quantity =value
            }
        }
    }
    
})();

product.qauntity = 20
product.quantity
product.quantity
