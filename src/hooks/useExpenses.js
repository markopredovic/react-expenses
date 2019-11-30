import { useReducer, useEffect } from "react";
import expensesReducer, { getTotal } from "../reducers/expensesReducer";
import {
  LIST_ALL_EXPENSES,
  ADD_EXPENSE,
  FILTER_EXPENSES,
  REMOVE_EXPENSE,
  CHANGE_LANG
} from "../types";
import {
  getLocalStorage,
  setLocalStorage,
  expenseCompare
} from "../helpers/Utility";

const useExpenses = localStorageKey => {
  // useReducer

  console.log("[USE EXPENSES]");

  const [state, dispatch] = useReducer(expensesReducer);

  useEffect(() => {
    list();
  }, []);

  const list = () => {
    const expenses = getLocalStorage(localStorageKey).sort(expenseCompare);

    if (expenses) {
      dispatch({ type: LIST_ALL_EXPENSES, payload: expenses });
    }
  };

  const add = expense => {
    try {
      _addExpense(expense);
    } catch (e) {}

    dispatch({ type: ADD_EXPENSE, payload: expense });
  };

  const _addExpense = expense => {
    const expenses = getLocalStorage(localStorageKey);

    let updatedExpenses = expenses ? [...expenses, expense] : [expense];

    setLocalStorage(localStorageKey, updatedExpenses);

    return updatedExpenses;
  };

  const filter = filter => {
    const expenses = getLocalStorage(localStorageKey);

    console.log("[FILTER EXPENSES]", expenses);

    let updatedExpenses = expenses;

    if (filter.month !== -1 && filter.year !== -1) {
      updatedExpenses = expenses
        .filter(
          expense =>
            new Date(expense.date).getMonth() === filter.month &&
            new Date(expense.date).getFullYear() === filter.year
        )
        .sort(expenseCompare);
    }

    dispatch({ type: FILTER_EXPENSES, payload: { updatedExpenses, filter } });
  };

  const remove = id => {
    _removeExpense(id);
    dispatch({ type: REMOVE_EXPENSE, payload: id });
  };

  const _removeExpense = id => {
    const expenses = getLocalStorage(localStorageKey);
    let updatedExpenses = expenses.filter(expense => expense.id !== id);

    console.log("[REMOVE EXPENSES hook]", updatedExpenses);

    setLocalStorage(localStorageKey, updatedExpenses);

    return updatedExpenses;
  };

  const changeLang = lang => {
    dispatch({type: CHANGE_LANG, payload: lang})
  }

  return {
    state,
    total: getTotal(),
    list,
    add,
    filter,
    remove,
    changeLang
  };
};

export default useExpenses;
