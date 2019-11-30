import React, { useState, useEffect, useRef, useContext } from "react";
import ExpensesContext from "../../context/ExpensesContext";
import LocalizedStrings from "react-localization";

const FilterExpenses = () => {
  let strings = new LocalizedStrings({
    en: {
      selectDate: "Select date 2",
      month: "month",
      year: "year",
      all: "All",
      may: "May",
      submit: "submit"
    },
    sr: {
      selectDate: "Izaberi datum",
      month: "mesec",
      year: "godina",
      all: "Sve",
      may: "Maj",
      submit: "potvrdi"
    }
  });

  const context = useContext(ExpensesContext);

  const [selectDisabled, setSelectDisabled] = useState(true);

  const selectMonthRef = useRef(null);
  const selectYearRef = useRef(null);

  if (context.state) {
    strings.setLanguage(context.state.lang);
    console.log("[CURRENT LANG]", strings.getLanguage());
  }

  useEffect(() => {
    console.log("[USE EFFECT filter]");
    selectMonthRef.current.value = context.state ? context.state.month : -1;
    selectYearRef.current.value = context.state ? context.state.year : -1;
  }, [context.state]);

  const _setDisabled = () => {
    parseInt(selectMonthRef.current.value) !== -1
      ? setSelectDisabled(false)
      : setSelectDisabled(true);
  };

  const onChangeMonth = e => {
    _setDisabled();

    if (selectMonthRef.current.value !== "-1") {
      selectYearRef.current.value = new Date().getFullYear();
    }
  };

  const onChangeYear = e => {
    console.log("[onChangeYear]", selectYearRef.current.value);

    if (selectYearRef.current.value === "-1") {
      selectMonthRef.current.value = "-1";
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    context.filter({
      month: parseInt(selectMonthRef.current.value),
      year: parseInt(selectYearRef.current.value)
    });
  };

  return (
    <>
      <form className="l-filter" onSubmit={onSubmitHandler}>
        <span>{strings.selectDate}: </span>
        <div className="l-fields">
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
          <span>{strings.year}:</span>
          <select
            name="expenses-year"
            onChange={onChangeYear}
            ref={selectYearRef}
            disabled={selectDisabled}
          >
            <option value="-1">All</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className="l-action">
          <button type="submit">{strings.submit}</button>
        </div>
      </form>
    </>
  );
};

export default FilterExpenses;
