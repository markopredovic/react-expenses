import { useReducer, useEffect } from "react";
import expensesReducer from "../reducers/expensesReducer";
import { LIST_EXPENSES, ADD_EXPENSE, FILTER_EXPENSES } from "../types";
import { getLocalStorage, setLocalStorage } from "../helpers/Utility";

const useExpenses = localStorageKey => {
  // useReducer
  const [state, dispatch] = useReducer(expensesReducer);

  useEffect(() => {
    console.log("[USE EFFECT: initial expenses load]");
    list();
  }, []);

  console.log("[Expenses]", state);

  const list = () => {
    console.log("[LIST: function]");

    const expenses = getLocalStorage(localStorageKey);

    console.log("[useExpenses LIST]", expenses);

    if (expenses) {
      dispatch({ type: LIST_EXPENSES, payload: expenses });
    }
  };

  const add = expense => {
    console.log("[ADD: function]");

    try {
      addExpense(expense);
    } catch (e) {
      return console.log("[ADD expense error]", e);
    }

    dispatch({ type: ADD_EXPENSE, payload: expense });
  };

  const addExpense = expense => {
    const expenses = getLocalStorage(localStorageKey);

    let updatedExpenses = expenses ? [...expenses, expense] : [expense];

    setLocalStorage(localStorageKey, updatedExpenses);

    return updatedExpenses;
  };

  const filter = month => {
    if (month === -1) {
      list();
    } else {
      list()
      dispatch({ type: FILTER_EXPENSES, payload: month });
    }
  };

  return { state, list, add, filter };
};

export default useExpenses;
