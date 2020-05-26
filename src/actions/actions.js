import api from "../api";

import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  FILTER_UPDATE,
  EXPENSE_DELETED,
  GET_EXPENSES_LIST,
  EXPENSE_ADDED,
} from "../types";

const login = (credentials) => {
  return async (dispatch) => {
    try {
      const data = await api.login(credentials);
      dispatch(userLoggedIn(data));
    } catch (e) {
      throw new Error("Unable to login");
    }
  };
};

const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};

const userLoggedIn = (data) => {
  return {
    type: USER_LOGGED_IN,
    payload: {
      jwt: data.jwt,
      user: data.user,
    },
  };
};

const filterUpdate = (newFilter) => {
  return {
    type: FILTER_UPDATE,
    payload: newFilter,
  };
};

const deleteExpense = (id) => {
  return async (dispatch) => {
    try {
      const res = await api.deleteExpense(id);
      dispatch(expenseDeleted(res.data.id));
    } catch (e) {
      throw new Error(e);
    }
  };
};

const expenseDeleted = (id) => {
  return {
    type: EXPENSE_DELETED,
    payload: id,
  };
};

const register = (data) => {
  return async (dispatch) => {
    try {
      await api.register(data);
    } catch (e) {
      throw new Error(e.response.data.message[0].messages[0].message);
    }
  };
};

const getExpenses = () => {
  return async (dispatch) => {
    try {
      const data = await api.getExpenses();
      dispatch(expensesFetched(data));
    } catch (e) {
      throw new Error(e.message);
    }
  };
};

const expensesFetched = (data) => {
  return {
    type: GET_EXPENSES_LIST,
    payload: data,
  };
};

const addExpense = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.addExpense(data);
      dispatch(expenseAdded(res.data));
    } catch (e) {
      throw new Error("Unable to add");
    }
  };
};

const expenseAdded = (data) => {
  return {
    type: EXPENSE_ADDED,
    payload: data,
  };
};

export {
  login,
  logout,
  filterUpdate,
  deleteExpense,
  register,
  getExpenses,
  addExpense,
};
