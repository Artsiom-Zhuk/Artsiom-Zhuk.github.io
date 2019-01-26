import React, { Component } from 'react';

class PersonList extends Component {
  state = {
    value: '',
    filteredPersons: this.props.persons,
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    const { persons } = this.props;
    const filteredPersons = persons.filter(({ name, birthPlace }) => (name + birthPlace).toLowerCase().includes(value.toLowerCase()));
    this.setState({ value, filteredPersons });
  }

  render() {
    const { goToPersonPage } = this.props;
    const { value, filteredPersons } = this.state;
    const personList = filteredPersons.map(({ id, name, birthPlace, birthDate,  }, index) => (
      <div key={id}>
        <p onClick={()=>goToPersonPage(index)}>{name}</p>
        <p>{birthPlace}</p>
        <p>{birthDate}</p>
      </div>
    ));
    return (
      <div>
        <h2>Список фотографов</h2>
        <p>Страница со списком деятелей культуры по заданной теме с поиском</p>
        <input onChange={this.handleInputChange} value={value} />
        {personList}
      </div>
    );
  }
}

export default PersonList;
