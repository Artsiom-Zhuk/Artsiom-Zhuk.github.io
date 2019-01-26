import React from 'react';

const PersonItem = ({ person: { name, age } }) => (
  <div>
    <h2>Страница деятеля</h2>
    <p>Страница деятеля культуры</p>
    <p>{name}</p>
    <p>{age}</p>
  </div>
);

export default PersonItem;