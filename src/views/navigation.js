import React from 'react';
import '../style/navigation.css';

const Navigation = ({ goToMain, goToPersonList, t }) => (
  <nav>
    <li onClick={goToMain}>{ t('Main') }</li>
    <li onClick={goToPersonList}>{ t('Person List') }</li>
  </nav>
);

export default Navigation;
