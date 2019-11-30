import { useReducer, useEffect } from "react";
import expensesReducer from "../reducers/expensesReducer";
import {
  LIST_ALL_EXPENSES,
  ADD_EXPENSE,
  FILTER_EXPENSES,
  REMOVE_EXPENSE,
  CHANGE_LANG
} from "../types";

const useExpenses = api => {
  // useReducer

  console.log("[USE EXPENSES]");

  const [state, dispatch] = useReducer(expensesReducer);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    const expenses = api.getList();

    if (expenses) {
      dispatch({ type: LIST_ALL_EXPENSES, payload: expenses });
    }
  };

  const add = expense => {
    try {
      api.add(expense);
    } catch (e) {}

    dispatch({ type: ADD_EXPENSE, payload: expense });
  };

  const filter = filter => {
    dispatch({ type: FILTER_EXPENSES, payload: { filter } });
  };

  const remove = id => {
    api.remove(id);
    dispatch({ type: REMOVE_EXPENSE, payload: id });
  };

  const changeLang = lang => {
    dispatch({ type: CHANGE_LANG, payload: lang });
  };

  return {
    state,
    add,
    filter,
    remove,
    changeLang
  };
};

export default useExpenses;
