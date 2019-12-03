import React, { useEffect, useRef, useContext } from "react";
import ExpensesContext from "../../context/ExpensesContext";
import LocalizedStrings from "react-localization";

const FilterExpenses = () => {
  let strings = new LocalizedStrings({
    en: {
      selectDate: "Select date filter:",
      month: "month",
      year: "year",
      all: "All",
      may: "May",
      submit: "submit"
    },
    rs: {
      selectDate: "Filtriraj troskove po datumu:",
      month: "mesec",
      year: "godina",
      all: "Sve",
      may: "Maj",
      submit: "primeni"
    }
  });

  const context = useContext(ExpensesContext);

  const selectMonthRef = useRef(null);
  const selectYearRef = useRef(null);

  if (context.state) {
    strings.setLanguage(context.state.lang);
  }

  useEffect(() => {
    selectMonthRef.current.value = context.state ? context.state.month : -1;
    selectYearRef.current.value = context.state ? context.state.year : -1;
  }, [context.state]);

  const onChangeMonth = e => {};

  const onSubmitHandler = e => {
    e.preventDefault();

    const shouldDoFilter =
      selectMonthRef.current.value !== -1 || selectYearRef.current.value !== -1;

    if (shouldDoFilter) {
      context.filter({
        month: parseInt(selectMonthRef.current.value),
        year: parseInt(selectYearRef.current.value)
      });
    }
  };

  return (
    <>
      <form className="l-filter" onSubmit={onSubmitHandler}>
        <span>{strings.selectDate}</span>
        <div className="l-fields">
          <div className="l-select">
            <span>{strings.month}:</span>
            <select
              name="expenses-month"
              onChange={onChangeMonth}
              ref={selectMonthRef}
              style={{ marginRight: "20px" }}
            >
              <option value="-1">{strings.all}</option>
              <option value="0">Jan</option>
              <option value="1">Feb</option>
              <option value="2">Mar</option>
              <option value="3">Apr</option>
              <option value="4">{strings.may}</option>
              <option value="5">Jun</option>
              <option value="6">Jul</option>
              <option value="7">Avg</option>
              <option value="8">Sep</option>
              <option value="9">Okt</option>
              <option value="10">Nov</option>
              <option value="11">Dec</option>
            </select>
          </div>
          <div className="l-select">
            <span>{strings.year}:</span>
            <select name="expenses-year" ref={selectYearRef}>
              <option value="-1">{strings.all}</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
        <div className="l-action">
          <button type="submit">{strings.submit}</button>
        </div>
      </form>
    </>
  );
};

export default FilterExpenses;
