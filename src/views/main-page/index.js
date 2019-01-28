import React from 'react';
import { Media } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Button } from 'reactstrap';
import './main-page.css';

const MainPage = ({ person: { name, titlePhoto, birthDate, birthPlace, id }, goToPersonPage, t }) => (

  <div>
    <div className="main-page__div-background">
      <div className="main-page__div-wrapper">
        <div className="main-page__div-container-title-artist-day">
          <h1><Badge className="main-page__badge-title-artist-day" color="dark">{t('Фотограф дня')}</Badge></h1>
        </div>
        <Media className="main-page__media-container-artist-day">
          <div className="main-page__div-container-image-artist">
            <Media left href="#">
              <Media className="main-page__media-image-artist" object src={require(`../../assets/${titlePhoto}`) } alt={id} />
            </Media>
          </div>
          <div className="main-page__div-about-artist">
            <Media body>
              <Media heading>
                <div div className="main-page__div-container-name-artist">{t(name)}</div>
              </Media>
              <div>{t('Место рождения')}: {t(birthPlace)}</div>
              <div>{t('Дата рождения')}: {birthDate}</div>
              <div className="main-page__div-container-button-more">
               <Button className="main-page__button-more" onClick={goToPersonPage} color="primary">{t('Подробнее')}</Button>{' '}
               </div>
            </Media>
          </div>
        </Media>
        <div className="main-page__div-container-about-portal">
            <h4 className="main-page__h4-title-about-portal">{t('О портале')}</h4>
            <div className="main-page__div-information-about-portal">{t('Портал содержит информацию о жизни и творчестве выдающихся фотографов Беларуси')}</div>
        </div>
        <div className="main-page__div-container-team-project">
          <h5 className="main-page__h5-team-ptoject">{t('Команда проекта')}</h5>
          <div className="main-page__div-team-project">
            <div className="main-page__div-developer">
              <div className="main-page__div-img-developer main-page__div-img-first-developer" />
              <div className="main-page__div-name-developer">
                {t('Владислав')}
              </div>
              <div>
                <a href="https://github.com/sunrisekovalevski">GitHub</a>
              </div>
            </div>
            <div className="main-page__div-developer">
              <div className="main-page__div-img-developer main-page__div-img-second-developer" />
              <div className="main-page__div-name-developer">
                {t('Анатолий')}
              </div>
              <div>
                <a href="https://github.com/dzhudzhi">GitHub</a>
              </div>
            </div>
            <div className="main-page__div-developer">
              <div className="main-page__div-img-developer main-page__div-img-third-developer"/>
              <div className="main-page__div-name-developer">
                {t('Павел')}
              </div>
              <div>
                <a href="https://github.com/CuppaKe">GitHub</a>
              </div>
            </div>
            <div className="main-page__div-developer main-page__div-last-developer">
              <div className="main-page__div-img-developer main-page__div-img-fourth-developer"/>
              <div className="main-page__div-name-developer">
                {t('Артём')}
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
