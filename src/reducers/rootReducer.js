import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  FILTER_UPDATE,
  EXPENSE_DELETED,
  EXPENSE_ADDED,
  GET_EXPENSES_LIST,
} from "../types";

const initialState = {
  token: null,
  user: null,
  expenses: [],
  filter: {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return userLoggedIn(state, action.payload);
    case USER_LOGGED_OUT:
      return userLoggedOut(state);
    case FILTER_UPDATE:
      return filterUpdate(state, action.payload);
    case EXPENSE_DELETED:
      return deleteExpense(state, action.payload);
    case GET_EXPENSES_LIST:
      return fetchExpenses(state, action.payload);
    case EXPENSE_ADDED:
      return addExpense(state, action.payload);
    default:
      return state;
  }
};

const userLoggedIn = (state, data) => {
  return {
    ...state,
    token: data.jwt,
    user: data.user,
  };
};

const userLoggedOut = (state) => {
  return {
    ...state,
    token: null,
    user: null,
    expenses: [],
  };
};

const filterUpdate = (state, newFilter) => {
  return {
    ...state,
    filter: {
      month: parseInt(newFilter.month),
      year: parseInt(newFilter.year),
    },
  };
};

const deleteExpense = (state, id) => {
  let updatedExpenses = state.expenses.filter((expense) => expense.id !== id);

  return {
    ...state,
    expenses: updatedExpenses,
  };
};

const fetchExpenses = (state, expenses) => {
  return {
    ...state,
    expenses,
  };
};

const addExpense = (state, expense) => {
  return {
    ...state,
    expenses: [...state.expenses, expense],
  };
};
