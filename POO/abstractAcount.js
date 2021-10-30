class Account{
    constructor(customer, number){
        if(this.constructor === Account){
            throw Error("that account doesn't must to be instance")
        }

        this.customer = customer
        this.number = number
        this.balance = 0
        
    }

    deposit(n){
        this.balance += n;
    }

    withdraw(n){
        if(this.balance < n || this.balance <= 0){
            throw Error("Balance's not enough")
        }
      this.balance -= n;
    }

}

class SavingsAccount extends Account{
    constructor(){
        super("pedro", 123) 
    }
}


let account = new SavingsAccount();
account.deposit(250)
console.log(account.balance)
account.withdraw(270)
console.log(account.balance)
account.withdraw(270)