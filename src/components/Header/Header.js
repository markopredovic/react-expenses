import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ExpenseContext from "../../context/ExpensesContext";
import LocalizedStrings from "react-localization";

const Header = () => {
  let strings = new LocalizedStrings({
    en: {
      expenseList: "Expense List",
      addExpense: "Add Expense"
    },
    sr: {
      expenseList: "Lista troskova",
      addExpense: "Dodaj troskove"
    }
  });

  const context = useContext(ExpenseContext);

  if (context.state) {
    strings.setLanguage(context.state.lang);
    console.log("[CURRENT LANG]", strings.getLanguage());
  }

  return (
    <header>
      <div className="l-lang">
        <ul>
          <li>
            <span onClick={() => context.changeLang("en")}>English</span>
          </li>
          <li>
            <span>|</span>
          </li>
          <li>
            <span onClick={() => context.changeLang("sr")}>Srpski</span>
          </li>
        </ul>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="is-active-link">
              {strings.expenseList}
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-expense" exact activeClassName="is-active-link">
              {strings.addExpense}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
