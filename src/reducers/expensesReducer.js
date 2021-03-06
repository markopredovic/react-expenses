import {
  LIST_ALL_EXPENSES,
  ADD_EXPENSE,
  FILTER_EXPENSES,
  REMOVE_EXPENSE,
  CHANGE_LANG
} from "../types";

const initialState = {
  expenses: [],
  month: -1,
  year: new Date().getFullYear(),
  lang: "rs"
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ALL_EXPENSES:
      return getFullList(state, action);
    case ADD_EXPENSE:
      return addExpense(state, action.payload);
    case FILTER_EXPENSES:
      return filterExpenses(state, action.payload);
    case REMOVE_EXPENSE:
      return removeExpense(state, action.payload);
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.payload
      };
    default:
      return state;
  }
};

const getFullList = (state, action) => {
  return {
    ...state,
    expenses: [...state.expenses, ...action.payload],
    month: -1,
    year: new Date().getFullYear()
  };
};

const addExpense = (state, expense) => {
  return {
    ...state,
    expenses: [...state.expenses, expense]
  };
};

const filterExpenses = (state, payload) => {
  return {
    ...state,
    month: payload.filter.month,
    year: payload.filter.year
  };
};

const removeExpense = (state, id) => {
  let updatedExpenses = state.expenses.filter(expense => expense.id !== id);

  return {
    ...state,
    expenses: updatedExpenses
  };
};

export default expensesReducer;
