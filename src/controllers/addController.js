const { add } = require("../model/expensesModel");

module.exports = async ({ description, amount }) => {
  try {
    const { id } = await add({ description, amount });
    console.log(`Expense added successfully (ID: ${id})`);
  } catch (error) {
    console.log(error);
  }
};