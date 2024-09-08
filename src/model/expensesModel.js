const fs = require('fs').promises;
const createReadStream = require('fs').createReadStream;
const path = require('path');
const csvParser = require('csv-parser');
const { nanoid } = require('nanoid');
const { getCurrentDateUTC } = require('../lib/dateLib');

const DATA_SOURCE = path.join('..','/data', 'expenses.json');
const STANDARD = 'utf8';

const checkFileExistence = async path => !!(await fs.stat(path).catch(e => false));

const readDataFile = async () => {
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

const writeDataFile = async (jsonObj) => {
  await fs.writeFile(
    path.resolve(__dirname, DATA_SOURCE), 
    JSON.stringify(jsonObj), 
    STANDARD
  );
};

const add = async ({ description, amount }) => {
  const id = nanoid();
  const date = getCurrentDateUTC();
  const newExpense = {
    id,
    description,
    amount,
    date
  };

  const data = readDataFile();
  data[id] = newExpense;
  await writeDataFile(data);

  return newExpense;
};

module.exports = {
  add
};