# expense-track

A simple expense tracker CLI application to manage your finances. The application allows users to add, delete, and view their expenses. The application also provides a summary of the expenses.

## Project URL

rodamap(https://roadmap.sh/projects/expense-tracker)

## Prerequisites

- [NodeJS ^18.x](https://nodejs.org/en)
- [Node Package Manager (npm)](https://www.npmjs.com/)

## Installation

1. Clone this repository.

```shell
git clone https://github.com/GioLop/expense-track.git
```

2. Enter to folder.

```shell
cd expense-track
```

3. Install dependecies.

```shell
npm i
```

4. Install app globally.

```shell
npm install -g .
```

Now you can use it.

## How to use it commands and options

### Adding an expense

```shell
# Adding a new expense
expense-tracker add --description "Lunch" --amount 20
# Expense added successfully (ID: 555c3cb5aa)
```

### Updating an expense

```shell
# Updating an expense
expense-tracker update --id 555c3cb5aa --description "Dinner" --amount 40
# Expense updated successfully (ID: 555c3cb5aa)
```

### Deleting an expense

```shell
# Deleting an expense
expense-tracker delete --id 555c3cb5aa
# Expense deleted successfully (ID: 555c3cb5aa)
```

### Listing expenses

```shell
# Listing expenses
expense-tracker list
# ID              Date            Description             Amount
# 555c3cb5aa      2024/09/09      Dinner                  10
# 1b409835ac      2024/09/09      Lunch                   200
```

### Getting expenses summary

```shell
# Getting expenses summary
expense-tracker list
# Total expenses: $20
```

```shell
# Getting expenses summary
expense-tracker list --month 8
# Total expenses for August: $20
```

## Expense Properties

Each expense have the following properties:

- id: A unique identifier for the task
- description: A short description of the expense
- date: The date when the expense was tracked
- amount: The value of the expense
