import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { Table, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import Expense from "../Expense";
import FilterExpenses from "../FilterExpenses";
import * as utils from "../../shared/utils";
import { filterUpdate, deleteExpense, getExpenses } from "../../actions";

const ExpensesListPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isExpenseDeleted, setExpenseDeleted] = useState(false);

  const isLogged = useSelector((state) => !!state.token);

  useEffect(() => {
    if (!isLogged) {
      history.push("/");
    } else {
      dispatch(getExpenses());
    }
  }, []);

  const expenses = useSelector((state) => {
    const { filter } = state;

    if (!filter.month && !filter.year) {
      return state.expenses;
    } else {
      let expenses = state.expenses.filter((expense) => {
        const [month, year] = utils.getMonthAndYearFromDate(
          expense.expense_date
        );
        if (filter.month && filter.year) {
          return month === filter.month && year === filter.year;
        } else if (!filter.month && filter.year) {
          return year === filter.year;
        } else if (!filter.year && filter.month) {
          return month === filter.month;
        } else return null;
      });

      return expenses;
    }
  });

  const filter = useSelector((state) => state.filter);

  const total =
    expenses.length > 0
      ? expenses.reduce((acc, current) => acc + current.amount, 0)
      : 0;

  const expenseList = expenses.map((expense) => (
    <Expense
      key={expense.id}
      {...expense}
      deleteExpense={() => handleDelete(expense.id)}
    />
  ));

  const updateFilter = (newFilter) => {
    setExpenseDeleted(false);
    dispatch(filterUpdate(newFilter));
  };

  const handleDelete = async (id) => {
    try {
      setExpenseDeleted(false);
      await dispatch(deleteExpense(id));
      setExpenseDeleted(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main>
      <div className="container">
        <FilterExpenses currentFilter={filter} updateFilter={updateFilter} />
        {!!isExpenseDeleted && <Alert variant="danger">Expense Deleted</Alert>}
        {expenses.length > 0 ? (
          <>
            <Scrollbars autoHeight autoHeightMin={10} autoHeightMax={310}>
              <Table responsive hover striped size="sm">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>DEL</th>
                  </tr>
                </thead>
                <tbody>{expenseList}</tbody>
              </Table>
            </Scrollbars>
            <div className="mt-3">
              Total: <strong>{total.toFixed(2)}</strong>
            </div>
          </>
        ) : (
          <div>No data for selected period</div>
        )}
      </div>
    </main>
  );
};

export default ExpensesListPage;
