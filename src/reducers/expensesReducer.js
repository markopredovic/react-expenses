import { LIST_EXPENSES, ADD_EXPENSE, FILTER_EXPENSES } from '../types'

const initialState = {
  expenses: [],
  month: null
};

const expensesReducer = (state = initialState, action) => {
  switch(action.type) {
    case LIST_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
        total: getTotal(action.payload)
      };
    case ADD_EXPENSE:
      return addExpense(state, action.payload)
    case FILTER_EXPENSES:
      return filterExpenses(state, action.payload)
    default:
      console.log(state)
      return state
  }
}

const getTotal = expenses => {
  // reduce expenses
  let total = expenses.reduce((acc, current) => acc + current.price, 0)

  return total
}

const addExpense = (state, expense) => {
  return {
    ...state,
    expenses: [...state.expenses, expense]
  };
}

const filterExpenses = (state, month) => {

  console.log('[FILTER MONTH]', month)

  let filteredExpenses = state.expenses.filter(expense => {
    const date_month = new Date(expense.date).getMonth();
    return date_month === month;
  })

  return {
    ...state,
    expenses: filteredExpenses,
    month: month,
    total: getTotal(filteredExpenses)
  };
}

export default expensesReducer