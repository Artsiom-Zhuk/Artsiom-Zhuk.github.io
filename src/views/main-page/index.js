import React from 'react';
import { Media } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Button } from 'reactstrap';

import bazan_3 from '../../assets/bazan_3.jpg';
import './main-page.css';

const MainPage = ({ person: { name, titlePhoto, birthDate }, goToPersonPage }) => (
  <div>
    <div className="main-page__div-background">
      <div className="main-page__div-wrapper">
        <div className="main-page__div-container-title-artist-day">
          <h1><Badge className="main-page__badge-title-artist-day" color="dark">Фотограф дня</Badge></h1>
        </div>
        <Media className="main-page__media-container-artist-day">
          <div className="main-page__div-container-image-artist">
            <Media left href="#">
              <Media className="main-page__media-image-artist" object src={bazan_3} alt="Generic placeholder image" />
            </Media>
          </div>
          <div className="main-page__div-about-artist">
            <Media body>
              <Media heading>
                <div>{name}</div>
              </Media>
              <div>Место рождения: Унеча, Брянск, СССР</div>
              <div>Дата рождения: {birthDate}</div>
              <div>Года жизни: 1953 - наши дни</div>
              <Button className="main-page__button-more" onClick={goToPersonPage} color="primary">Подробнее</Button>{' '}
            </Media>
          </div>
        </Media>
        <div className="main-page__div-container-about-portal">
            <h4>О портале</h4>
            <div>Портал содержит информацию о жизни и творчести выдающихся фотогрофов Беларуси.</div>
        </div>
        <div className="main-page__div-container-team-project">
          <h5 className="main-page__h5-team-ptoject">Команда проекта</h5>
          <div className="main-page__div-team-project">
            <div className="main-page__div-developer">
              <div className="main-page__div-img-first-developer">
              </div>
              <div className="main-page__div-name-developer">
                Владислав
              </div>
              <div>
                <a href="https://github.com/sunrisekovalevski">GitHub</a>
              </div>
            </div>
            <div className="main-page__div-developer">
              <div className="main-page__div-img-second-developer">
              </div>
              <div className="main-page__div-name-developer">
                Анатолий
              </div>
              <div>
                <a href="https://github.com/dzhudzhi">GitHub</a>
              </div>
            </div>
            <div className="main-page__div-developer">
              <div className="main-page__div-img-third-developer">
              </div>
              <div className="main-page__div-name-developer">
                Павел
              </div>
              <div>
                <a href="https://github.com/CuppaKe">GitHub</a>
              </div>
            </div>
            <div className="main-page__div-developer">
              <div className="main-page__div-img-fourth-developer">
              </div>
              <div className="main-page__div-name-developer">
                Артём
              </div>
              <div>
                <a href="https://github.com/Artsiom-Zhuk">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
);

export default MainPage;
