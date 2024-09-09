const { deleteExpense } = require("../model/expenses.model");

module.exports = async ({ id }) => {
  try {
    const expense = await deleteExpense({ id });
   
    console.log(`Expense deleted succesfully (ID: ${ expense.id })`);
  } catch ({ message }) {
    console.log(message);
  }
};