const formatListExpenses = ({ expenses }) => {
  const header = "ID\t\tDate\t\tDescription\t\tAmount";
  const list = expenses.map(({ 
    id, 
    date, 
    description, 
    amount
  }) => `${id}\t${date}\t${description}\t\t\t${amount}`).join('\n');

  return `${header}\n${list}`;
};

module.exports = {
  formatListExpenses
};