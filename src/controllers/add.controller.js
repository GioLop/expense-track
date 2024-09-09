const { validateAmount, validateDescription } = require("../lib/validators.lib");
const { addExpense } = require("../model/expenses.model");

module.exports = async ({ description, amount }) => {
  try {
    validateDescription(description);
    validateAmount(amount);
    
    const { id } = await addExpense({ description, amount });
    
    console.log(`Expense added successfully (ID: ${id})`);
  } catch ({ message }) {
    console.log(message);
  }
};