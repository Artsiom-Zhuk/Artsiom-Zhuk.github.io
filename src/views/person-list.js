import React from 'react';

const PersonList = ({ persons, goToPersonPage }) => {
  const personList = persons.map(({ name, birthDate, id }, index) => (
    <div key={id}>
      <p onClick={()=>goToPersonPage(index)}>{name}</p>
      <p>{birthDate}</p>
    </div>
  ));
  return (
    <div>
      <h2>Список фотографов</h2>
      <p>Страница со списком деятелей культуры по заданной теме с поиском</p>
      {personList}
    </div>
  );
}

export default PersonList;
