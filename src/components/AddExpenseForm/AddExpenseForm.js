import React, { useRef, useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ExpenseContext from "../../context/ExpensesContext";
import LocalizedStrings from "react-localization";
import { registerLocale } from "react-datepicker";
import rs from "date-fns/locale/sr-Latn";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
registerLocale("rs", rs);

// TODO: add toast messages

const AddExpenseForm = () => {
  let strings = new LocalizedStrings({
    en: {
      addExpenseName: "add expense name",
      addExpenseValue: "add expense value",
      submit: "add",
      emptyName: "empty expense name",
      emptyPrice: "empty expense value",
      selectDate: "Date:",
      expenseAdded: "Expense added to list"
    },
    rs: {
      addExpenseName: "naziv utroska",
      addExpenseValue: "potrosena vrednost",
      submit: "dodaj",
      emptyName: "prazan naziv utroska",
      emptyPrice: "prazna vrednost utroska",
      selectDate: "Datum:",
      expenseAdded: "Utrosak dodat u listu"
    }
  });

  const [errors, setErrors] = useState(null);

  const context = useContext(ExpenseContext);

  if (context.state) {
    strings.setLanguage(context.state.lang);
  }

  const currentLang = strings.getLanguage();

  const expenseInputPriceRef = useRef(null);
  const expenseInputNameRef = useRef(null);

  const [date, setDate] = useState(new Date());

  const onSubmitHandler = e => {
    e.preventDefault();

    const errors = validateExpense();

    if (Object.keys(errors).length === 0) {
      const newExpense = createExpense();
      context.add(newExpense);
      ToastsStore.success(strings.expenseAdded);

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

    if (expenseInputNameRef.current.value === "")
      errors.emptyName = strings.emptyName;
    if (expenseInputPriceRef.current.value === "")
      errors.emptyPrice = strings.emptyPrice;

    setErrors(errors);

    return errors;
  };

  const handleChange = date => {
    setDate(date);
  };

  return (
    <main>
      <div className="l-add-expense-form">
        <form onSubmit={onSubmitHandler}>
          <div className="l-fields">
            <div className="l-field">
              <input
                type="text"
                name="expense"
                ref={expenseInputNameRef}
                placeholder={strings.addExpenseName}
              />
              {errors && (
                <span className="m-inline-error">{errors.emptyName}</span>
              )}
            </div>
            <div className="l-field">
              <input
                type="text"
                name="expense"
                ref={expenseInputPriceRef}
                placeholder={strings.addExpenseValue}
              />
              {errors && (
                <span className="m-inline-error">{errors.emptyPrice}</span>
              )}
            </div>
          </div>
          <div className="l-fields">
            <span style={{ marginRight: "10px" }}>{strings.selectDate}</span>
            <DatePicker
              locale={currentLang === "en" ? "en" : "rs"}
              selected={date}
              onChange={handleChange}
              dateFormat="MMMM d, yyyy"
            />
          </div>

          <button type="submit">{strings.submit}</button>
        </form>
      </div>
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_RIGHT}
      />
    </main>
  );
};

export default AddExpenseForm;
