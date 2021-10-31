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
    constructor(customer, number){
        super(customer, number) 
        this.birthday = Date.now()
    }
}


let account = new SavingsAccount("pedro", 123, "19/04/1997");
account.deposit(250)
console.log(account.balance)
console.log(account)


class currentAccount extends Account{
    constructor(customer, number, limit){
        super(customer, number) 
        this.limit = limit
    }
    deposit(n){
        if(n > 3000)throw Error("your limit is 3000")
        this.balance += n;
    }

    withdraw(n){
        if(this.balance < n || this.balance <= 0){
            throw Error("Balance's not enough")
        }
      this.balance -= n;
    }

}


let account1 = new currentAccount("Paulo", 12345, 3000);
account.deposit(3000)
console.log(account1.balance)
console.log(account1)