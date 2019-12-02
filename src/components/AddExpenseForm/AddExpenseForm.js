import React, { useRef, useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ExpenseContext from "../../context/ExpensesContext";
import LocalizedStrings from "react-localization";
import { registerLocale } from "react-datepicker";
import rs from "date-fns/locale/sr";
registerLocale("rs", rs);

const AddExpenseForm = () => {
  let strings = new LocalizedStrings({
    en: {
      addExpenseName: "add expense name",
      addExpenseValue: "add expense value",
      submit: "add",
      emptyName: "empty expense name",
      emptyPrice: "empty expense value"
    },
    rs: {
      addExpenseName: "unesi naziv utroska",
      addExpenseValue: "unesi potrosenu vrednost",
      submit: "dodaj",
      emptyName: "prazno ime utroska",
      emptyPrice: "prazna vrednost utroska"
    }
  });

  const [errors, setErrors] = useState(null);

  const context = useContext(ExpenseContext);

  if (context.state) {
    strings.setLanguage(context.state.lang);
    console.log("[CURRENT LANG]", strings.getLanguage());
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
            <input
              type="text"
              name="expense"
              ref={expenseInputNameRef}
              placeholder={strings.addExpenseName}
            />
            {errors && errors.emptyName}
            <input
              type="text"
              name="expense"
              ref={expenseInputPriceRef}
              placeholder={strings.addExpenseValue}
            />
            {errors && errors.emptyPrice}
          </div>
          <div className="l-field">
            <DatePicker
              locale={currentLang === "en" ? "en" : "rs"}
              selected={date}
              onChange={handleChange}
            />
          </div>

          <button type="submit">{strings.submit}</button>
        </form>
      </div>
    </main>
  );
};

export default AddExpenseForm;
