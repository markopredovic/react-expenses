import React from "react";
import PageTitle from "../common/PageTitle";
import Layout from "../UI/Layout";
import SignUpForm from "../forms/SignUpForm";

const RegisterPage = () => {
  return (
    <Layout>
      <PageTitle title="Sign Up" />
      <SignUpForm />
    </Layout>
  );
};

export default RegisterPage;
