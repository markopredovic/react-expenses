import React, { useContext } from "react";
import ExpensesContext from "../../context/ExpensesContext";
import LocalizedStrings from "react-localization";

const Footer = () => {
  let strings = new LocalizedStrings({
    en: {
      developedBy: "Developed By"
    },
    rs: {
      developedBy: "Napravio"
    }
  });

  const context = useContext(ExpensesContext);

  if (context.state) {
    strings.setLanguage(context.state.lang);
  }

  return (
    <footer>
      <div className="l-content">
        {strings.developedBy} <a href="https://markoni.codes">markoni.codes</a>
      </div>
    </footer>
  );
};

export default Footer;
