const fs = require('fs').promises;
const path = require('path');
const STANDARD = 'utf8';

const checkFileExistence = async path => !!(await fs.stat(path).catch(e => false));

const getDataFromFile = async (source) => {
  const fileExists = await checkFileExistence (path.resolve(__dirname, source));
  let data = {};
  
  if (!fileExists) {
    return data; 
  }
  
  data = JSON.parse(
    await fs.readFile(
      path.resolve(__dirname, source), 
      STANDARD
    )
  );

  return data;
};

const writeDataInFile = async (obj, source) => {
  await fs.writeFile(
    path.resolve(__dirname, source), 
    JSON.stringify(obj), 
    STANDARD
  );
};

const writeCSVFile = async (data, source) => {
  const now = new Date();
  const fileName = `expenses_${now.getTime()}.scv`;
  const target = path.resolve(`${source}/${fileName}`);
  
  await fs.writeFile(
    target,
    data,
    STANDARD
  );

  return target;
};

module.exports = {
  getDataFromFile,
  writeDataInFile,
  writeCSVFile
};