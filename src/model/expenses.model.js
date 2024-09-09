const path = require('path');
const { customAlphabet } = require('nanoid');
const { getDateFormatted, getYearMonth } = require('../lib/date.lib');
const { DoesNotExistError } = require('../lib/errors.lib');
const { getDataFromFile, writeDataInFile } = require('../lib/file.lib');

const nanoid = customAlphabet('1234567890abcdef', 10)

const DATA_SOURCE = path.join('..', '/', 'data', '/', 'expenses.json');

const addExpense = async ({ description, amount }) => {
  const id = nanoid();
  const date = getDateFormatted();
  const newExpense = {
    id,
    description,
    amount,
    date
  };

  const data = await getDataFromFile(DATA_SOURCE);
  data[id] = newExpense;
  await writeDataInFile(data, DATA_SOURCE);
  
  return newExpense;
};

const getExpenseById = async ({ id }) => {
  const data = await getDataFromFile(DATA_SOURCE);
  const expense = data[id];
  
  if (!expense) {
    throw new DoesNotExistError({ id });
  }

  return expense;
};

const deleteExpense = async ({ id }) => {
  const expense = await getExpenseById({ id });
  const data = await getDataFromFile(DATA_SOURCE);
  
  delete data[expense.id];  

  await writeDataInFile(data, DATA_SOURCE);
  return expense;
};

const getAllExpenses = async () => {
  const data = await getDataFromFile(DATA_SOURCE);
  return Object.values(data);
};

const getExpensesByMonth = async ({ month }) => {
  const yearMonth = getYearMonth({ month });
  const expenses = await getAllExpenses();
  
  return expenses.filter((expense) => expense.date.startsWith(yearMonth));
};

const updateExpense = async ({ id, updates }) => {
  const expense = await getExpenseById({ id });
  const data = await getDataFromFile(DATA_SOURCE);
  
  const updated = { 
    ...expense,
    description: updates.description || expense.description,
    amount: updates.amount || expense.amount
  };
  
  data[id] = updated;
  await writeDataInFile(data, DATA_SOURCE);
  
  return updated;
};

const sumAmounts = (acc, curr) => acc + curr.amount;

const getSummary = async () => {
  const expenses = await getAllExpenses();
  const summary = expenses.reduce(sumAmounts, 0);

  return summary;
};

const getSummaryByMonth = async ({ month }) => {
  const monthExpenses = await getExpensesByMonth({ month });
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
