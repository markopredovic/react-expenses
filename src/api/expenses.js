import React from "react";
import {
  getLocalStorage,
  setLocalStorage,
  getMonthName
} from "../helpers/Utility";

const LOCAL_STORAGE_KEY = "react_expenses";

export const getList = () => {
  return getLocalStorage(LOCAL_STORAGE_KEY);
};

export const add = expense => {
  const expenses = getLocalStorage(LOCAL_STORAGE_KEY);

  let updatedExpenses = expenses ? [...expenses, expense] : [expense];

  setLocalStorage(LOCAL_STORAGE_KEY, updatedExpenses);

  return updatedExpenses;
};

export const remove = id => {
  const expenses = getLocalStorage(LOCAL_STORAGE_KEY);
  let updatedExpenses = expenses.filter(expense => expense.id !== id);

  setLocalStorage(LOCAL_STORAGE_KEY, updatedExpenses);

  return updatedExpenses;
};

export const makeExpensesListHeaderText = (month, year, context, strings) => {
  let result = null;

  if (month === null && year === null) {
    return null;
  }
  if (month === -1 && year === -1) {
    result = strings.expensesAllTime;
  }
  if (month === -1 && year !== -1) {
    result = strings.formatString(
      strings.expensesWholeYear,
      <span className="m-bold m-beige">{year}</span>
    );
  }
  if (month !== -1 && year === -1) {
    result = strings.formatString(
      strings.expensesMonthForAllYears,
      <span className="m-bold m-beige">
        {getMonthName(context.state.lang, month)}
      </span>
    );
  }
  if (month !== -1 && year !== -1) {
    result = strings.formatString(
      strings.expensesForMonthYear,
      <span className="m-bold m-beige">
        {getMonthName(context.state && context.state.lang, month)}
      </span>,
      <span className="m-bold m-beige">{year}</span>
    );
  }

  return result;
};
