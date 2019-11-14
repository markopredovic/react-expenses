import { createContext } from 'react'

const expensesContext = createContext({
  expenses: [],
  list: () => {},
  add: () => {}
})

export default expensesContext

