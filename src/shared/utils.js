const getMonthAndYearFromDate = (stringDate) => {
  const date = new Date(stringDate);
  const month = date.getMonth();
  const year = date.getFullYear();

  return [month, year];
};

export { getMonthAndYearFromDate };
