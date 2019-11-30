import { getLocalStorage, setLocalStorage } from '../helpers/Utility'
const LOCAL_STORAGE_KEY = 'react_expenses'

export const getList = () => {
  return getLocalStorage(LOCAL_STORAGE_KEY);
}
export const add = (expense) => {
  const expenses = getLocalStorage(LOCAL_STORAGE_KEY);

  let updatedExpenses = expenses ? [...expenses, expense] : [expense];

  setLocalStorage(LOCAL_STORAGE_KEY, updatedExpenses);

  return updatedExpenses;
}
export const remove = id => {
      const expenses = getLocalStorage(LOCAL_STORAGE_KEY);
      let updatedExpenses = expenses.filter(expense => expense.id !== id);

      setLocalStorage(LOCAL_STORAGE_KEY, updatedExpenses);

      return updatedExpenses;
}
export const filter = () => {}