import React, { useContext, useEffect, useState } from "react";
import ExpensesContext from "../../context/ExpensesContext";
import LocalizedStrings from "react-localization";
import { getMonthName } from "../../helpers/Utility";

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
      expensesWholeYear: "Troskovi za celu {0} godinu",
      expensesMonthForAllYears: "Troskovi za {0} mesec za sve godine",
      expensesForMonthYear: "Troskovi za {0} mesec za {1} godinu"
    }
  });

  const context = useContext(ExpensesContext);

  const makeHeader = (month, year) => {
    let result = null;

    if (month === null && year === null) {
      return null;
    }
    if (month === -1 && year === -1) {
      result = strings.expensesAllTime;
    }
    if (month === -1 && year !== -1) {
      result = strings.formatString(
        strings.expensesWholeYear,
        <span className="m-bold m-beige">{year}</span>
      );
    }
    if (month !== -1 && year === -1) {
      result = strings.formatString(
        strings.expensesMonthForAllYears,
        <span className="m-bold m-beige">
          {getMonthName(context.state.lang, month)}
        </span>
      );
    }
    if (month !== -1 && year !== -1) {
      result = strings.formatString(
        strings.expensesForMonthYear,
        <span className="m-bold m-beige">
          {getMonthName(context.state && context.state.lang, month)}
        </span>,
        <span className="m-bold m-beige">{year}</span>
      );
    }

    return result;
  };

  if (context.state) {
    strings.setLanguage(context.state.lang);
  }

  useEffect(() => {
    if (context.state) {
    }
  }, [context.state]);

  return (
    <div className="l-expenses-header">
      {makeHeader(
        context.state && context.state.month,
        context.state && context.state.year
      )}
    </div>
  );
};

export default ListHeader;
