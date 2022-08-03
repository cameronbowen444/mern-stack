class BankAccount{
    constructor(intRate=0.01, balance=0) {
        this.intRate = intRate;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        this.balance -= amount;
        if (this.balance < 0) {
            console.log("Insufficient funds: Charging a 5$ fee");
            this.balance -= 5;
        }
        else{
            console.log("Suffient Finds");
        }
    }
    displayAccountInfo() {
        console.log("Balance: $" + this.balance);
    }
    yieldInterest() {
        this.balance += this.balance * this.intRate;
        return this;
    }
}

const checking = new BankAccount();
const savings = new BankAccount();
console.log("New Accounts! \n");
console.log(checking);
console.log(savings);

checking.deposit(100);
savings.deposit(4000);
console.log("\n Making deposits!");
console.log(checking);
console.log(savings);
console.log(checking.balance);
console.log(savings.balance);

checking.withdraw(150);
savings.withdraw(500);
console.log("\n Withdraw Amount!");
console.log(checking);
console.log(savings);

console.log("\n Displaying Account Balance");
checking.displayAccountInfo();
savings.displayAccountInfo();
checking.deposit(400);

console.log("\n Yeilding Interest");
checking.yieldInterest();
savings.yieldInterest();
checking.displayAccountInfo();
savings.displayAccountInfo();