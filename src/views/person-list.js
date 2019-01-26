import React from 'react';

const PersonList = ({ persons, goToPersonPage }) => {
  const personList = persons.map(({ name, age }, index) => (
    <div key={name+age+index}>
      <p onClick={()=>goToPersonPage(index)}>{name}</p>
      <p>{age}</p>
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
