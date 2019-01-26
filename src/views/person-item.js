import React from 'react';

const PersonItem = ({ person: { name, titlePhoto, birthDate } }) => (
  <div>
    <h2>Страница деятеля</h2>
    <p>Страница деятеля культуры</p>
    <p>{name}</p>
    <img src={`/assets/${titlePhoto}`} alt="" />
    <p>{birthDate}</p>
  </div>
);

export default PersonItem;