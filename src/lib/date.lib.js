const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const getCurrentDateUTC = () => {
  const nowDate = new Date();
  const nowDateUTC = nowDate.toUTCString();

  return nowDateUTC;
};

const getDigitDateFormatted = (digit) => `${digit}`.length < 2 ? `0${digit}`: digit;

const getDateFormatted = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${year}/${getDigitDateFormatted(month + 1)}/${getDigitDateFormatted(day)}`;
};

const getMonthName = ({ month }) => MONTHS[month - 1];

const getYearMonth = ({ month }) => {
  const currentYear = new Date().getFullYear();
  return `${currentYear}/${getDigitDateFormatted(month)}`;
};

module.exports = {
  getCurrentDateUTC,
  getDateFormatted,
  getMonthName,
  getYearMonth
};