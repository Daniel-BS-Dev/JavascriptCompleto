const Product = {
    name : "tv",
    price: 5.000,
    quantity: 10,
    //method
    toBuy: function(n){
      if(n > this.quantity){
          return "no product";
      }
      this.quantity -= n;
    }
}

console.log(Product);

Product.toBuy(3);
console.log(Product);

Product.toBuy(31);
console.log(Product);