let Expenses = {
  water: 0,
  gas: 0,
  electricity: 0,
  addExpense: function(type, amount) {
    if (this.hasOwnProperty(type)) {
      if (typeof amount === 'number' && amount > 0) {
        this[type] += amount;
        console.log(`${type} expense of ${amount} added successfully.`);
      } else {
        console.log("Invalid amount!");
      }
    } else {
      console.log("Invalid expense type!");
    }
  },
  removeExpense: function(type, amount) {
    if (this.hasOwnProperty(type)) {
      if (typeof amount === 'number' && amount > 0 && amount <= this[type]) {
        this[type] -= amount;
        console.log(`${type} expense of ${amount} removed successfully.`);
      } else {
        console.log("Invalid amount!");
      }
    } else {
      console.log("Invalid expense type!");
    }
  },
  printMonthlyReport: function() {
    console.log("Monthly Report:");
    for (let expenseType in this) {
      if (typeof this[expenseType] === 'number' && expenseType !== 'printMonthlyReport') {
        console.log(`${expenseType}: ${this[expenseType]}`);
      }
    }
  }
};
Expenses.addExpense('water', 50);
Expenses.addExpense('gas', 30);
Expenses.addExpense('electricity', 70);
Expenses.printMonthlyReport();

Expenses.removeExpense('water', 20);
Expenses.printMonthlyReport();
