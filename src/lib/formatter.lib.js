const formatListExpenses = ({ expenses }) => {
  const header = "ID\t\tDate\t\tDescription\t\tAmount";
  const list = expenses.map(({ 
    id, 
    date, 
    description, 
    amount
  }) => `${id}\t${date}\t${description}\t\t${amount}`).join('\n');

  return `${header}\n${list}`;
};

const generateExpensesCSVFormat = (data) => {
  const header = 'ID,Date,Description,Amount';
  const body = data.map(({ 
    id,
    date,
    description,
    amount
  }) => `${id},${date},${description},${amount}`).join('\n');
  
  return`${header}\n${body}`;
};

module.exports = {
  formatListExpenses,
  generateExpensesCSVFormat
};