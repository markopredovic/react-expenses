import React, { useContext, useRef } from 'react';
import ExpensesContext from '../../context/ExpensesContext'

const ExpensesList = () => {

  const context = useContext(ExpensesContext);

  console.log("[Context]", context);

  const selectMonthRef = useRef(null)

  const getLocaleDate = date => {
    let localeDate = new Date(date)

    return localeDate.toLocaleDateString('sr-SR')
  };

  const onChangeHandler = e => {
    console.log('[On change handler]', e)
    console.log('[select month ref]', selectMonthRef.current.value)

    context.filter(parseInt(selectMonthRef.current.value));
  }

  const expensesList = context.state === undefined
    ? "Loading..."
    : context.state.expenses.map((expense, index) => {
      const localeDate = getLocaleDate(expense.date);

        return (
          <li key={index}>
            <span style={{ marginRight: "10px" }}>{localeDate}</span>
            <span style={{ marginRight: "10px" }}>
              {expense.price.toFixed(2)} din.
            </span>
            <span>{expense.name}</span>
          </li>
        );
    });

  return (
    <>
      <div>Expenses List</div>
      <div className="l-filter">
        <span>Choose month: </span>
        <select name="expenses-month" onChange={onChangeHandler} ref={selectMonthRef}>
          <option value="-1">All</option>
          <option value="0">Jan</option>
          <option value="1">Feb</option>
          <option value="2">Mar</option>
          <option value="3">Apr</option>
          <option value="4">May</option>
          <option value="5">Jun</option>
          <option value="6">Jul</option>
          <option value="7">Avg</option>
          <option value="8">Sep</option>
          <option value="9">Okt</option>
          <option value="10">Nov</option>
          <option value="11">Dec</option>
        </select>
      </div>
      <ul>{expensesList}</ul>
      <p>Total: {context.state && `${context.state.total.toFixed(2)} din.`}</p>
    </>
  );
}

export default ExpensesList;