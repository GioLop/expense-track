getCurrentDateUTC = () => {
  const nowDate = new Date();
  const nowDateUTC = nowDate.toUTCString();

  return nowDateUTC;
}

module.exports = {
  getCurrentDateUTC
};