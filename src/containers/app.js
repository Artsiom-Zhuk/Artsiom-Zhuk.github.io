import React, { Component } from 'react';

import Navigation from '../views/navigation';
import MainPage from '../views/main-page';
import PersonList from '../views/person-list';
import PersonItem from '../views/person-item';

class App extends Component {
  state = {
    pageToShow: 'mainPage',
    persons: [
      {
        name: 'Ivan',
        age: 40,
      },
      {
        name: 'Petr',
        age: 50,
      },
    ],
    personId: null,
  }

  goToMain = () => {
    this.setState({ pageToShow: 'mainPage' });
  }

  goToPersonList = () => {
    this.setState({ pageToShow: 'personList' });
  }

  goToPersonPage = (personId) => {
    this.setState({ 
      pageToShow: 'personItem',
      personId,
    });
  }

  render() {
    const { pageToShow, persons, personId } = this.state;
    const app = {
      mainPage: <MainPage />,
      personList: <PersonList persons={persons} goToPersonPage={this.goToPersonPage} />,
      personItem: <PersonItem person={persons[personId]} />,
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
