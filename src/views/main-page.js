import React from 'react';
import { Media } from 'reactstrap';

import bazan_3 from '../assets/bazan_3.jpg';

import './main-page.css';

const MainPage = ({ person: { name, titlePhoto, birthDate }, goToPersonPage }) => (
  <div>
    <h2>Главная страница</h2>
    <p>Фотограф дня</p>
    <p onClick={goToPersonPage}>{name}</p>
    <img src={`/assets/${titlePhoto}`} alt="" />
    <p>{birthDate}</p>
    <p>Главная страница</p>
    <Media>
      <Media left href="#">
        <Media className="main-page__media-image" object src={bazan_3} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  </div>
);

export default MainPage;
