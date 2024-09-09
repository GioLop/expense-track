const { updateExpense } = require("../model/expenses.model");

module.exports = async ({ id, description, amount }) => {
  try {
    const updates = { description, amount };
    const updated = await updateExpense({ id, updates });
    console.log(`Expense updated successfully (ID: ${updated.id})`);
  } catch ({ message }) {
    console.log(message);
  }
};