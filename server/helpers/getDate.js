function getYYMMFromDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(-2);
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');

  return `${year}${month}`;
}

module.exports = getYYMMFromDate