import React, { useContext } from "react";
import ExpensesContext from "../../context/ExpensesContext";
import FilterExpenses from "../FilterExpenses";
import Expense from "./Expense/Expense";
import ListHeader from "../ListHeader";
import { getTotal, getFilteredList } from "../../selectors/expenses";
import LocalizedStrings from "react-localization";

const ExpensesList = () => {
  let strings = new LocalizedStrings({
    en: {
      total: "Total"
    },
    rs: {
      total: "Ukupno"
    }
  });

  const context = useContext(ExpensesContext);

  if (context.state) {
    strings.setLanguage(context.state.lang);
  }

  const filteredList = context.state
    ? getFilteredList(context.state.expenses, {
        month: context.state.month,
        year: context.state.year
      })
    : [];

  return (
    <main>
      <FilterExpenses />
      <ListHeader />
      <ul className="l-expenses-list">
        {context.state
          ? filteredList.map((expense, index) => (
              <Expense key={index} expense={expense} />
            ))
          : "Loading ..."}
      </ul>
      <div className="l-total">
        {strings.total}:{" "}
        <span className="m-bold m-beige">
          {getTotal(filteredList).toFixed(2)}
        </span>
      </div>
    </main>
  );
};

export default ExpensesList;
