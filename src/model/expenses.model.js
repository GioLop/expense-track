const fs = require('fs').promises;
const createReadStream = require('fs').createReadStream;
const path = require('path');
const csvParser = require('csv-parser');
const { customAlphabet } = require('nanoid');
const { getDateFormatted } = require('../lib/date.lib');
const { DoesNotExistError } = require('../lib/errors.lib');

const nanoid = customAlphabet('1234567890abcdef', 10)

const DATA_SOURCE = path.join('..', '/', 'data', '/', 'expenses.json');
const STANDARD = 'utf8';

const checkFileExistence = async path => !!(await fs.stat(path).catch(e => false));

const getDataFromFile = async () => {
  const fileExists = await checkFileExistence (path.resolve(__dirname, DATA_SOURCE));
  let data = {};
  
  if (!fileExists) {
    return data; 
  }
  
  data = JSON.parse(
    await fs.readFile(
      path.resolve(__dirname, DATA_SOURCE), 
      STANDARD
    )
  );

  return data;
};

const writeDataInFile = async (obj) => {
  await fs.writeFile(
    path.resolve(__dirname, DATA_SOURCE), 
    JSON.stringify(obj), 
    STANDARD
  );
};

const addExpense = async ({ description, amount }) => {
  const id = nanoid();
  const date = getDateFormatted();
  const newExpense = {
    id,
    description,
    amount,
    date
  };

  const data = await getDataFromFile();
  data[id] = newExpense;
  await writeDataInFile(data);
  
  return newExpense;
};

const getExpenseById = async ({ id }) => {
  const data = await getDataFromFile();
  const expense = data[id];
  
  if (!expense) {
    throw new DoesNotExistError({ id });
  }

  return expense;
};

const deleteExpense = async ({ id }) => {
  const expense = await getExpenseById({ id });
  const data = await getDataFromFile();
  
  delete data[expense.id];  

  await writeDataInFile(data);
  return expense;
};

const getAllExpenses = async () => {
  const data = await getDataFromFile();
  return Object.values(data);
};

const getExpensesByMonth = async ({ month }) => {
  const data = await getDataFromFile();
  const currentYear = '';
  return Object.values(data);
};

const updateExpense = async ({ id, updates }) => {
  const expense = await getExpenseById({ id });
  const data = await getDataFromFile();
  
  const updated = { 
    ...expense,
    description: updates.description || expense.description,
    amount: updates.amount || expense.amount
  };
  
  data[id] = updated;
  await writeDataInFile(data);
  
  return updated;
};

const sumAmounts = (acc, curr) => acc + curr.amount;

const getSummary = async () => {
  const expenses = await getAllExpenses();
  const summary = expenses.reduce(sumAmounts, 0);

  return summary;
};

const getSummaryByMonth = async ({ month }) => {
  const expenses = await getAllExpenses();
  const monthExpenses = expenses.filter();
  const summary = monthExpenses.reduce(sumAmounts, 0);

  return summary;
};

module.exports = {
  addExpense,
  getExpenseById,
  deleteExpense,
  getAllExpenses,
  getExpensesByMonth,
  updateExpense,
  getSummary,
  getSummaryByMonth
};
