import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { register } from "../../actions";

const initialData = {
  username: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState({});

  const { data, changeHandler } = useForm(initialData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register(data));
      history.push("/expenses/new");
    } catch (e) {
      setErrors({ register: e.toString().replace("Error: ", "") });
    }
  };

  return (
    <div>
      {!!errors.register && <Alert variant="danger">{errors.register}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="signup.username">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={data.username}
            onChange={(e) => changeHandler(e)}
          />
        </Form.Group>
        <Form.Group controlId="signup.email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={(e) => changeHandler(e)}
          />
        </Form.Group>

        <Form.Group controlId="signup.password">
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
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
