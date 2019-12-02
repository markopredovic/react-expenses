import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ExpenseContext from "../../context/ExpensesContext";
import LocalizedStrings from "react-localization";
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  let strings = new LocalizedStrings({
    en: {
      expenseList: "Expense List",
      addExpense: "Add Expense"
    },
    rs: {
      expenseList: "Lista troskova",
      addExpense: "Dodaj troskove"
    }
  });

  const context = useContext(ExpenseContext);

  if (context.state) {
    strings.setLanguage(context.state.lang);
  }

  const currentLang = strings.getLanguage();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/react-expenses"
              exact
              activeClassName="is-active-link"
            >
              {strings.expenseList}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/react-expenses/add-expense"
              exact
              activeClassName="is-active-link"
            >
              {strings.addExpense}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="l-lang">
        <ul>
          {currentLang === "en" && (
            <li>
              <span
                onClick={() => context.changeLang("rs")}
                className={currentLang === "rs" ? "active-lang" : ""}
              >
                <ReactCountryFlag code="rs" svg />
              </span>
            </li>
          )}
          {currentLang === "rs" && (
            <li>
              <span
                onClick={() => context.changeLang("en")}
                className={currentLang === "en" ? "active-lang" : ""}
              >
                <ReactCountryFlag code="us" svg />
              </span>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
