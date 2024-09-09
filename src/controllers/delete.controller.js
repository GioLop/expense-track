const { deleteExpense } = require("../model/expenses.model");

module.exports = async ({ id }) => {
  try {
    const expense = await deleteExpense({ id });
    console.log(expense.id);
  } catch ({ message }) {
    console.log(message);
  }
};