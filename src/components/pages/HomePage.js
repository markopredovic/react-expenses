import React from "react";
import Layout from "../UI/Layout";
import PageTitle from "../common/PageTitle";

const HomePage = () => {
  return (
    <Layout>
      <PageTitle title="Expense management app" />
      <div>
        <p className="mb-4">
          This is simple React js + Redux expense management application. <br />
          Login with: test/test to try
        </p>
        <h3>Use cases:</h3>
        <ul>
          <li>Login / Register form</li>
          <li>Add / Delete expense</li>
          <li>List expenses</li>
          <li>Filter expenses</li>
        </ul>
        <h3>Features:</h3>
        <ul>
          <li>Redux state</li>
          <li>Strapi CMS</li>
          <li>Authentication using JWT</li>
          <li>Bootstrap CSS</li>
        </ul>
      </div>
    </Layout>
  );
};

export default HomePage;
