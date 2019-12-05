import React, { useContext } from "react";
import ExpensesContext from "../../context/ExpensesContext";
import LocalizedStrings from "react-localization";
import { makeExpensesListHeaderText } from "../../api/expenses";

const ListHeader = () => {
  let strings = new LocalizedStrings({
    en: {
      expensesAllTime: "All time expenses",
      expensesWholeYear: "Expenses for whole {0} year",
      expensesMonthForAllYears: "Expenses for {0} month for all years",
      expensesForMonthYear: "Expenses for {0} month for {1} year"
    },
    rs: {
      expensesAllTime: "Troskovi za celokupan period",
      expensesWholeYear: "Troskovi za celu {0}. godinu",
      expensesMonthForAllYears: "Troskovi za {0} za sve godine",
      expensesForMonthYear: "Troskovi za {0} {1}. godine"
    }
  });

  const context = useContext(ExpensesContext);

  if (context.state) {
    strings.setLanguage(context.state.lang);
  }

  const headerText = makeExpensesListHeaderText(
    context.state.month,
    context.state.year,
    context,
    strings
  );

  return <div className="l-expenses-header">{headerText}</div>;
};

export default ListHeader;
