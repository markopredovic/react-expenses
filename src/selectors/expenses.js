import { expenseCompare } from "../helpers/Utility";

export const getTotal = expenses => {
  return expenses.reduce((acc, expense) => acc + expense.price, 0);
};

export const getFilteredList = (expenses, filters) => {
  const { month, year } = filters;

  if (month === -1 && year === -1) {
    return expenses.sort(expenseCompare);
  } else {
    return expenses
      .filter(expense => {
        const _month = new Date(expense.date).getMonth();
        const _year = new Date(expense.date).getFullYear();

        if (month === -1) {
          return year === _year;
        } else if (year === -1) {
          return month === _month;
        } else {
          return month === _month && year === _year;
        }
      })
      .sort(expenseCompare);
  }
};
