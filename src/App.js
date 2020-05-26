import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ExpensesListPage from "./components/pages/ExpensesListPage";
import AddExpensePage from "./components/pages/AddExpensePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import store from "./store";

function App() {
  return (
    <div className="l-app">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/expenses" exact component={ExpensesListPage} />
            <Route path="/expenses/new" exact component={AddExpensePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
