#!/usr/bin/env node

const { Command } = require('commander');

const addController = require('../src/controllers/addController');
const updateController = require('../src/controllers/updateController');
const deleteController = require('../src/controllers/deleteController');
const listController = require('../src/controllers/listController');
const summaryController = require('../src/controllers/summaryController');
const generateController = require('../src/controllers/generateController');

const program = new Command();

program
  .name('expense-tracker')
  .description('CLI expense tracker application to manage your finances')
  .version('0.1');

program
  .command('add')
  .description('Add an expense to track it')
  .option('-d, --description <string>', 'expense description', '')
  .option('-a, --amount <number>', 'expense ammount', parseInt)
  .action(addController);

program
  .command('update')
  .description('Update an expense')
  .option('-d, --description <string>', 'expense description', '')
  .option('-a, --amount <number>', 'expense ammount', parseInt)
  .action(updateController);

program
  .command('delete')
  .description('Delete an expense')
  .option('-i --id <string>', 'expense identificator', '')
  .action(deleteController);

program
  .command('list')
  .description('List all the expenses')
  .action(listController);

program
  .command('summary')
  .description('Get a summary of the expenses')
  .option('-m --month <number>', 'month of current year')
  .action(summaryController);

program
  .command('generate')
  .description('Generate a CSV file')
  .option('-d --destinity', 'target to save file', '')
  .action(generateController);

program.parse(process.argv);

