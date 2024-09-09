const { getMonthName } = require("../lib/date.lib");
const { getSummary, getSummaryByMonth } = require("../model/expenses.model");

module.exports = async ({ month }) => {
  if (!month) {
    try {
      const summary = await getSummary();
      
      console.log(`Total expenses: $${summary}`);
    } catch ({ message }) {
      console.log(error);
    }
  } else {
    try {
      const summary = await getSummaryByMonth({ month });
      const monthName = getMonthName({ month });
      
      console.log(`Total expenses for ${monthName}: $${summary}`);
    } catch ({ message }) {
      console.log(message); 
    }
  }
};