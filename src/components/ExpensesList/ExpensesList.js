import React, { useContext } from "react";
import ExpensesContext from "../../context/ExpensesContext";
import FilterExpenses from "../FilterExpenses";
import Expense from "./Expense/Expense";
import ListHeader from "../ListHeader";
import { getTotal, getFilteredList } from "../../selectors/expenses";
import LocalizedStrings from "react-localization";
import { Scrollbars } from "react-custom-scrollbars";

const ExpensesList = () => {
  let strings = new LocalizedStrings({
    en: {
      emptyList: "There are no entried expenses",
      total: "Total"
    },
    rs: {
      emptyList: "Nema unetih troskova",
      total: "Ukupno"
    }
  });

  const context = useContext(ExpensesContext);

  if (context.state) {
    strings.setLanguage(context.state.lang);
  }

  const filteredList = context.state
    ? getFilteredList(context.state.expenses, {
        month: context.state.month,
        year: context.state.year
      })
    : [];

  const total = getTotal(filteredList).toFixed(2);

  return (
    <main>
      {context.state && <FilterExpenses />}
      {context.state && <ListHeader />}
      <div className="l-expenses-wrapper" style={{ marginBottom: "10px" }}>
        <Scrollbars autoHeight autoHeightMin={10} autoHeightMax={310}>
          <ul className="l-expenses-list">
            {context.state
              ? filteredList.length > 0
                ? filteredList.map((expense, index) => (
                    <Expense key={index} expense={expense} />
                  ))
                : strings.emptyList
              : strings.emptyList}
          </ul>
        </Scrollbars>
      </div>

      {filteredList.length > 0 && (
        <div className="l-total">
          {strings.total}: <span className="m-bold m-beige">{total}</span>
        </div>
      )}
    </main>
  );
};

export default ExpensesList;
