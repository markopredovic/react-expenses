import React, { useContext } from "react";
import { getLocaleDate } from "../../../helpers/Utility";
import ExpensesContext from "../../../context/ExpensesContext";
import { FaTimes } from "react-icons/fa";

const Expense = ({ expense }) => {

  const context = useContext(ExpensesContext);

  return (
    <li>
      <span style={{ marginRight: "10px", color: "blue" }}>
        {getLocaleDate(expense.date)}
      </span>
      <span style={{ marginRight: "10px", color: "red" }}>
        {expense.price.toFixed(2)}
      </span>
      <span style={{ marginRight: "10px" }}>{expense.name}</span>
      <span
        style={{ fontSize: "10px", color: "red", cursor: "pointer" }}
        onClick={() => context.remove(expense.id)}
      >
        <FaTimes />
      </span>
    </li>
  );
};

export default Expense;
