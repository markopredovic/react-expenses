import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Button, Alert } from "react-bootstrap";

import { useForm } from "../../hooks/useForm";
import { login } from "../../actions";

const LoginForm = () => {
  const initialData = {
    identifier: "",
    password: "",
  };
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { data, changeHandler } = useForm(initialData);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(login(data));
      history.push("/expenses");
    } catch (e) {
      setErrors({ loginError: e.message });
    }
  };

  return (
    <div>
      {!!errors.loginError && (
        <Alert variant="danger">{errors.loginError}</Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="login.username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="identifier"
            value={data.identifier}
            onChange={(e) => changeHandler(e)}
          />
        </Form.Group>

        <Form.Group controlId="login.password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={(e) => changeHandler(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
