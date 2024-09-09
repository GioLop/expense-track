const { writeCSVFile } = require("../lib/file.lib");
const { generateExpensesCSVFormat } = require("../lib/formatter.lib");
const { getAllExpenses } = require("../model/expenses.model");

module.exports = async () => {
  const allExpenses = await getAllExpenses();
  const csvString = generateExpensesCSVFormat(allExpenses);
  
  const filePath = await writeCSVFile(csvString, process.cwd());
  console.log(`File generated in ${filePath}`);
};