import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/styles.scss";

import ExpensesContext from "./context/ExpensesContext";
import useExpenses from "./hooks/useExpenses";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExpensesList from "./components/ExpensesList";
import AddExpenseForm from "./components/AddExpenseForm";
import * as api from "./api/expenses";

function App() {
  const { state, add, remove, filter, changeLang } = useExpenses(api);

  return (
    <div className="l-app">
      <ExpensesContext.Provider
        value={{ state, add, remove, filter, changeLang }}
      >
        <Router>
          <Header />
          <Switch>
            <Route path="/react-expenses" exact component={ExpensesList} />
            <Route
              path="/react-expenses/add-expense"
              exact
              component={AddExpenseForm}
            />
          </Switch>
          <Footer />
        </Router>
      </ExpensesContext.Provider>
    </div>
  );
}

export default App;

// TODO: APP outline:

//  1. lorem ipsum
//  2. hello world
//  3. hello
