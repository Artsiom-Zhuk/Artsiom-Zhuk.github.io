import React, { Component } from 'react';

import Navigation from '../views/navigation';
import MainPage from '../views/main-page';
import PersonList from '../views/person-list';
import PersonItem from '../views/person-item';

class App extends Component {
  state = {
    pageToShow: 'mainPage'
  }

  goToMain = () => {
    this.setState({ pageToShow: 'mainPage' });
  }

  goToPersonList = () => {
    this.setState({ pageToShow: 'personList' });
  }

  render() {
    const app = {
      mainPage: <MainPage />,
      personList: <PersonList />,
      personItem: <PersonItem />,
    };
    const { pageToShow } = this.state;
    
    return (
      <div className="App">
        <Navigation goToMain={this.goToMain} goToPersonList={this.goToPersonList} />
        {app[pageToShow]}
      </div>
    );
  }
}

export default App;
