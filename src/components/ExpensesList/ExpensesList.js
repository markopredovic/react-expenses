import React, { useContext } from "react";
import ExpensesContext from "../../context/ExpensesContext";
import FilterExpenses from "../FilterExpenses";
import Expense from "./Expense/Expense";
import { getTotal, getFilteredList } from "../../selectors/expenses"

const ExpensesList = () => {
  const context = useContext(ExpensesContext);

  const filteredList = context.state ? getFilteredList(context.state.expenses, {month: context.state.month, year: context.state.year}) : []

  return (
    <>
      <FilterExpenses />
      <ul>
        {context.state
          ? filteredList.map((expense, index) => (
              <Expense key={index} expense={expense} />
            ))
          : "Loading ..."}
      </ul>
      <div className="l-total">Total: {getTotal(filteredList).toFixed(2)}</div>
    </>
  );
};

export default ExpensesList;
