import React from "react";
import LoginForm from "../forms/LoginForm";
import PageTitle from "../common/PageTitle";
import Layout from "../UI/Layout";

const LoginPage = () => {
  return (
    <Layout>
      <PageTitle title="Login" />
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
