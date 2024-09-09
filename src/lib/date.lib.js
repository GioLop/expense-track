getCurrentDateUTC = () => {
  const nowDate = new Date();
  const nowDateUTC = nowDate.toUTCString();

  return nowDateUTC;
};

getDateFormatted = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = `${date.getMonth()+1}`;
  const day = `${date.getDate()}`

  return `${year}/${month.length < 2 ? `0${month}`: month}/${day.length < 2 ? `0${day}`: day}`;
};

module.exports = {
  getCurrentDateUTC,
  getDateFormatted
};