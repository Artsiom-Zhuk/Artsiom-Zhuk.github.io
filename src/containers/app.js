import React, { Component } from 'react';

import Navigation from '../views/navigation';
import MainPage from '../views/main-page';
import PersonList from '../views/person-list';
import PersonItem from '../views/person-item';

import persons from '../data/data';

class App extends Component {
  state = {
    pageToShow: 'mainPage',
    persons,
    personIndex: null,
  }

  goToMain = () => {
    this.setState({ pageToShow: 'mainPage' });
  }

  goToPersonList = () => {
    this.setState({ pageToShow: 'personList' });
  }

  goToPersonPage = (personIndex) => {
    this.setState({ 
      pageToShow: 'personItem',
      personIndex,
    });
  }

  render() {
    const { pageToShow, persons, personIndex } = this.state;
    const randomIndex = Math.floor(Math.random() * persons.length);
    const app = {
      mainPage: <MainPage 
        person={persons[randomIndex]} 
        goToPersonPage={() => this.goToPersonPage(randomIndex)} 
      />,
      personList: <PersonList persons={persons} goToPersonPage={this.goToPersonPage} />,
      personItem: <PersonItem person={persons[personIndex]} />,
    };
    
    return (
      <div className="App">
        <Navigation goToMain={this.goToMain} goToPersonList={this.goToPersonList} />
        {app[pageToShow]}
      </div>
    );
  }
}

export default App;
