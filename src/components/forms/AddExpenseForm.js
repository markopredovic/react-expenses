import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

import { useForm } from "../../hooks/useForm";
import InlineMessage from "../common/InlineMessage";
import { addExpense } from "../../actions";

const initialData = {
  title: "",
  amount: undefined,
  expense_date: new Date(),
};

const AddExpenseForm = () => {
  const [errors, setErrors] = useState({});
  const [isExpenseAdded, setExpenseAdded] = useState(false);
  const { data, setData, changeHandler } = useForm(initialData);
  const dispatch = useDispatch();
  const history = useHistory();

  const isLogged = useSelector((state) => !!state.token);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLogged) {
      history.push("/");
    }
  }, []);

  const _validateForm = () => {
    let _errors = {};

    if (data.title.trim() === "") {
      _errors.title = "Required field";
    }

    if (data.amount === undefined) {
      _errors.amount = "Required field";
    }

    return _errors;
  };

  const _resetForm = () => {
    setData(initialData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("data", data);

    setErrors({});
    setExpenseAdded(false);
    const _errors = _validateForm();

    if (Object.keys(_errors).length === 0) {
      // add user to payload
      let expenseData = {
        ...data,
        user,
      };
      setExpenseAdded(true);
      dispatch(addExpense(expenseData));
      _resetForm();
    } else {
      setErrors(_errors);
    }
  };

  return (
    <div>
      {!!isExpenseAdded && <Alert variant="success">New expense added</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="addExpense.title">
          <Form.Label>
            Title <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={data.title}
            onChange={(e) => changeHandler(e)}
            isInvalid={!!errors.title}
          />
          {!!errors.title && <InlineMessage>{errors.title}</InlineMessage>}
        </Form.Group>
        <Form.Group controlId="addExpense.amount">
          <Form.Label>
            Amount <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Amount"
            name="amount"
            value={!!data.amount && data.amount}
            onChange={(e) => changeHandler(e)}
            isInvalid={!!errors.amount}
          />
          {!!errors.amount && <InlineMessage>{errors.amount}</InlineMessage>}
        </Form.Group>
        <Form.Group controlId="addExpense.date">
          <Form.Label>Date:</Form.Label>
          <Form.Control
            type="date"
            name="expense_date"
            value={data.expense_date}
            onChange={(e) => changeHandler(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddExpenseForm;
