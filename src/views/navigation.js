import React from 'react';

const Navigation = ({ goToMain, goToPersonList }) => (
  <nav>
    <li onClick={goToMain}>Main</li>
    <li onClick={goToPersonList}>Person List</li>
  </nav>
);

export default Navigation;
