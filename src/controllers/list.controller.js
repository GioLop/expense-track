const { formatListExpenses } = require("../lib/formatter.lib");
const { getAllExpenses } = require("../model/expenses.model");

module.exports = async () => {
  try {
    const expenses = await getAllExpenses();
    const listFormatted = formatListExpenses({ expenses });
    
    console.log(listFormatted);
  } catch ({ message }) {
    console.log(message);
  }
};