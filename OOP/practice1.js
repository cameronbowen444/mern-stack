class User{
    constructor(username, emailAddress) {
        this.name = username;
        this.email = emailAddress;
        this.accountBalance = 0;
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }
    displayBalance() {
        console.log(this.name + ", Balance: $" + this.accountBalance);
        return this;
    }
    transferMoney(otherUser, amount) {
        this.accountBalance -= amount;
        otherUser.accountBalance += amount;
        return this;
    }
}

const cameron = new User("Cameron Bowen", "cameronbowen555@gmail.com");
const john = new User("John Doe", "johndoe@gmail.com");
const guido = new User("Guido van Rossum", "guido@python.com");
const monty = new User("Monty Python", "monty@python.com");

cameron.makeDeposit(45000).makeDeposit(50000).makeDeposit(90000).makeDeposit(5470);
john.makeDeposit(500).makeDeposit(500);
guido.makeDeposit(450);
monty.makeDeposit(4000);

console.log("Making Deposits");
console.log(cameron.accountBalance);
console.log(john.accountBalance);
console.log(guido.accountBalance);
console.log(monty.accountBalance);


cameron.makeWithdrawal(470);
john.makeWithdrawal(500).makeWithdrawal(500);
monty.makeWithdrawal(10).makeWithdrawal(20).makeWithdrawal(30);
guido.makeWithdrawal(50);

console.log("Making Withdrawals")
console.log(cameron.accountBalance);
console.log(john.accountBalance);
console.log(guido.accountBalance);
console.log(monty.accountBalance);

console.log("Displaying Balance of all acounts")
cameron.displayBalance();
john.displayBalance();
monty.displayBalance();
guido.displayBalance();

cameron.transferMoney(guido, 1000);
cameron.displayBalance();
guido.displayBalance();