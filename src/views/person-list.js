import React, { Component } from 'react';
import { translate } from 'react-i18next';
import '../style/list.css';

class PersonList extends Component {
  state = {
    value: '',
    filteredPersons: this.props.persons,
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    const { t, persons } = this.props;
    const filteredPersons = persons.filter(({ name, birthPlace }) => (t(name) + t(birthPlace)).toLowerCase().includes(value.toLowerCase()));
    this.setState({ value, filteredPersons });
  }

  render() {
    const { t } = this.props;
    const { goToPersonPage } = this.props;
    const { value, filteredPersons } = this.state;
    const personList = filteredPersons.map(({ id, name, birthPlace, birthDate,  }, index) => (
      <div key={id} className='person-list-item' onClick={()=>goToPersonPage(index)}>
        <p>{t(name)}</p>
        <p>{t(birthPlace)}</p>
        <p>{birthDate}</p>
      </div>
    ));
    

    return (
      <div className='list-page'>
        <h2 className='person-list-title'>{t('Список фотографов')}</h2>
        <div className='person-seacrh-container'>
          <p className='presearch'>{t('Поиск')}:</p>
          <input onChange={this.handleInputChange} value={value} placeholder={t('Введите имя или город')}/>
        </div>
        <div className='person-list-container'>
          {personList}
        </div>
      </div>
    );
  }
}

export default translate('translations')(PersonList);
