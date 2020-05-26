import React from "react";
import { getLocaleDate } from "../../shared/Utility";
import { FaTimes } from "react-icons/fa";

const Expense = ({ id, title, amount, expense_date, deleteExpense }) => {
  return (
    <tr>
      <td>
        <span className="">{title}</span>
      </td>
      <td>
        <span className="">{amount.toFixed(2)}</span>
      </td>
      <td>
        <span className="">{getLocaleDate(expense_date)}</span>
      </td>
      <td>
        <span className="expense-delete text-danger" onClick={deleteExpense}>
          <FaTimes />
        </span>
      </td>
    </tr>
  );
};

export default Expense;
