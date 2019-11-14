import React, { useRef, useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ExpenseContext from "../../context/ExpensesContext";
import { registerLocale } from "react-datepicker";
import sr from "date-fns/locale/sr";
registerLocale("sr", sr);

const AddExpenseForm = () => {
  const context = useContext(ExpenseContext);

  const expenseInputPriceRef = useRef(null);
  const expenseInputNameRef = useRef(null);


  const [date, setDate] = useState(new Date());

  const onSubmitHandler = e => {
    e.preventDefault();

    const errors = validateExpense();

    if (Object.keys(errors).length === 0) {
      const newExpense = createExpense();

      console.log("[NEW EXPENSE]", newExpense);

      context.add(newExpense);

      expenseInputNameRef.current.value = "";
      expenseInputPriceRef.current.value = "";
    }
  };

  const createExpense = () => {
    const expense = {};

    expense.id = Math.round(Math.random() * 1000000);
    expense.name = expenseInputNameRef.current.value;
    expense.price = parseInt(expenseInputPriceRef.current.value);
    expense.date = date;

    return expense;
  };

  const validateExpense = () => {
    let errors = {};

    return errors;
  };

  const handleChange = date => {
    setDate(date);
  };

  return (
    <div className="l-add-expense-form">
      <form onSubmit={onSubmitHandler}>
        <div className="l-fields">
          <input type="text" name="expense" ref={expenseInputNameRef} placeholder="add title" />
          <input type="text" name="expense" ref={expenseInputPriceRef} placeholder="add price"/>
        </div>
        <div className="l-field">
          <DatePicker locale="sr" selected={date} onChange={handleChange} />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
