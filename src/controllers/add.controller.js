const { addExpense } = require("../model/expenses.model");

module.exports = async ({ description, amount }) => {
  try {
    const { id } = await addExpense({ description, amount });
    
    console.log(`Expense added successfully (ID: ${id})`);
  } catch ({ message }) {
    console.log(message);
  }
};