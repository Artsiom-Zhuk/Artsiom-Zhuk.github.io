import React from "react";
import "../style/navigation.css";

const Navigation = ({ goToMain, goToPersonList, t }) => (
  <nav>
    <li className="nav-button" onClick={goToMain}>
      {t("Main")}
    </li>
    <li className="nav-button" onClick={goToPersonList}>
      {t("Person List")}
    </li>
  </nav>
);

export default Navigation;
