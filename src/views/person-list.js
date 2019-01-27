import React, { Component } from 'react';
import { translate } from 'react-i18next';

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
      <div key={id}>
        <p onClick={()=>goToPersonPage(index)}>{t(name)}</p>
        <p>{t(birthPlace)}</p>
        <p>{birthDate}</p>
      </div>
    ));
    

    return (
      <div>
        <h2>{t('Список фотографов')}</h2>
        <p>{t('Поиск')}</p>
        <input onChange={this.handleInputChange} value={value} />
        {personList}
      </div>
    );
  }
}

export default translate('translations')(PersonList);
