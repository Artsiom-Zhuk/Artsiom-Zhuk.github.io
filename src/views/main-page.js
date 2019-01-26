import React from 'react';

const MainPage = ({ person: { name, titlePhoto, birthDate }, goToPersonPage }) => (
  <div>
    <h2>Главная страница</h2>
    <p>Фотограф дня</p>
    <p onClick={goToPersonPage}>{name}</p>
    <img src={`/assets/${titlePhoto}`} alt="" />
    <p>{birthDate}</p>
  </div>
);

export default MainPage;