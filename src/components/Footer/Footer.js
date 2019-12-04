import React, { useContext, useEffect } from "react";
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

  console.log("[FOOTER RENDER]");

  useEffect(() => {
    console.log("[FOOTER USE EFFECT]");
    if (context.state) {
      strings.setLanguage(context.state.lang);
    }
  });

  useEffect(() => {
    console.log("[FOOTER USE EFFECT 2]");
    if (context.state) {
      strings.setLanguage(context.state.lang);
      console.log("GET LANGUAGE", strings.getLanguage());
    }
  }, [context.state]);

  return (
    <footer>
      <div className="l-content">
        {strings.developedBy} <a href="https://markoni.codes">markoni.codes</a>
      </div>
    </footer>
  );
};

export default Footer;
