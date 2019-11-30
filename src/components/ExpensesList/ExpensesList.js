import React, { useContext } from "react";
import ExpensesContext from "../../context/ExpensesContext";
import FilterExpenses from "../FilterExpenses";
import Expense from "./Expense/Expense";

const ExpensesList = () => {
  const context = useContext(ExpensesContext);

  return (
    <>
      <FilterExpenses />
      <ul>
        {context.state
          ? context.state.expenses.map((expense, index) => (
              <Expense key={index} expense={expense} />
            ))
          : "Loading ..."}
      </ul>
    </>
  );
};

export default ExpensesList;
