import React, { useContext } from "react";
import ExpensesContext from "../../context/ExpensesContext";

const Footer = () => {
  const context = useContext(ExpensesContext);

  return (
    <footer>
      <div className="l-content">
        Developed by <a href="https://markoni-dev.netlify.com">@markoni-dev</a>
      </div>
    </footer>
  );
};

export default Footer;
