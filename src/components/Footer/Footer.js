import React, { useContext } from "react";
import ExpensesContext from "../../context/ExpensesContext";

const Footer = () => {
  const context = useContext(ExpensesContext);

  return (
    <footer>
      <div className="l-content">@markoni-dev</div>
    </footer>
  );
};

export default Footer;
