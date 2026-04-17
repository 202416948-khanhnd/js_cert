class BankAccount {
  balance;
  transactions;

  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) return "Deposit amount must be greater than zero.";
    this.transactions.push({ type: "deposit", amount: amount });
    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance)
      return "Insufficient balance or invalid amount.";
    this.transactions.push({ type: "withdraw", amount: amount });
    this.balance -= amount;
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    let msg = "Deposits: ";
    this.transactions.forEach((tx) => {
      if (tx.type === "deposit") msg += `${tx.amount},`;
    });
    return msg.slice(0, -1);
  }

  listAllWithdrawals() {
    let msg = "Withdrawals: ";
    this.transactions.forEach((tx) => {
      if (tx.type === "withdraw") msg += `${tx.amount},`;
    });
    return msg.slice(0, -1);
  }
}

const myAccount = new BankAccount();
console.log(
  myAccount.deposit(1000),
  myAccount.deposit(2000),
  myAccount.withdraw(300),
  myAccount.withdraw(150),
  myAccount.withdraw(50),
);
console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits(), myAccount.listAllWithdrawals());
