import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import "./styles/styles.scss"

import ExpensesContext from './context/ExpensesContext'
import useExpenses from './hooks/useExpenses'
import Header from './components/Header'
import ExpensesList from './components/ExpensesList'
import AddExpenseForm from './components/AddExpenseForm'

function App() {

  const localStarageKey = 'react_expenses'
  const {state, filteredList, total, add, filter,remove, changeLang } = useExpenses(localStarageKey)

  return (
    <div className="l-app">
      <ExpensesContext.Provider
        value={{ state, filteredList, total, add, filter, remove, changeLang }}
      >
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={ExpensesList} />
            <Route path="/add-expense" exact component={AddExpenseForm} />
          </Switch>
        </Router>
      </ExpensesContext.Provider>
    </div>
  );
}

export default App;
