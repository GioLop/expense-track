#!/usr/bin/env node

const { Command } = require('commander');

const addController = require('../src/controllers/add.controller');
const updateController = require('../src/controllers/update.controller');
const deleteController = require('../src/controllers/delete.controller');
const listController = require('../src/controllers/list.controller');
const summaryController = require('../src/controllers/summary.controller');
const generateController = require('../src/controllers/generate.controller');

const program = new Command();

program
  .name('expense-tracker')
  .description('CLI expense tracker application to manage your finances')
  .version('0.1');

program
  .command('add')
  .description('Add an expense to track it')
  .option('--description <string>', 'expense description', '')
  .option('--amount <number>', 'expense ammount', parseInt)
  .action(addController);

program
  .command('update')
  .description('Update an expense')
  .option('--id <sring>', 'expense id', '')
  .option('--description <string>', 'expense description', '')
  .option('--amount <number>', 'expense ammount', parseInt)
  .action(updateController);

program
  .command('delete')
  .description('Delete an expense')
  .option('--id <string>', 'expense identificator', '')
  .action(deleteController);

program
  .command('list')
  .description('List all the expenses')
  .action(listController);

program
  .command('summary')
  .description('Get a summary of the expenses')
  .option('--month <number>', 'month of current year')
  .action(summaryController);

program
  .command('generate')
  .description('Generate a CSV file')
  .option('--destination', 'target to save file', '')
  .action(generateController);

program.parse(process.argv);

