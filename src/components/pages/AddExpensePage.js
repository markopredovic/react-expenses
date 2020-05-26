import React from "react";

import Layout from "../UI/Layout";
import PageTitle from "../common/PageTitle";
import AddExpenseForm from "../forms/AddExpenseForm";

const AddExpensePage = () => {
  return (
    <Layout>
      <PageTitle title="Add expense" />
      <AddExpenseForm />
    </Layout>
  );
};

export default AddExpensePage;
