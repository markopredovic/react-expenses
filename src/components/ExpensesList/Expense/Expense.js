import React, { useContext } from "react";
import { getLocaleDate } from "../../../helpers/Utility";
import ExpensesContext from "../../../context/ExpensesContext";
import { FaTimes } from "react-icons/fa";

const Expense = ({ expense }) => {
  const context = useContext(ExpensesContext);

  return (
    <li>
      <span className="expense-date">{getLocaleDate(expense.date)}</span>
      <span className="expense-price">{expense.price.toFixed(2)}</span>
      <span className="expense-name">{expense.name}</span>
      <span
        className="expense-delete"
        onClick={() => context.remove(expense.id)}
      >
        <FaTimes />
      </span>
    </li>
  );
};

export default Expense;
