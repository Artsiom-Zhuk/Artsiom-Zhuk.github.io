import React from "react";

const Navigation = ({ goToMain, goToPersonList, t }) => (
  <nav>
    <li onClick={goToMain}>{t("Main")}</li>
    <li onClick={goToPersonList}>{t("Person List")}</li>
  </nav>
);

export default Navigation;
