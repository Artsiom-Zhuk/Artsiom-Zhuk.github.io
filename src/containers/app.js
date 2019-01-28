import React, { Component } from "react";
import "../css/style.css";

import Navigation from "../views/navigation";
import MainPage from "../views/main-page/index";
import PersonList from "../views/person-list";
import PersonItem from "../views/person-item";

import persons from "../data/data";
import { translate } from "react-i18next";
import "../style/locControl.css";

class App extends Component {
  state = {
    pageToShow: "mainPage",
    persons,
    personIndex: null
  };

  goToMain = () => {
    this.setState({ pageToShow: "mainPage" });
  };

  goToPersonList = () => {
    this.setState({ pageToShow: "personList" });
  };

  goToPersonPage = personIndex => {
    this.setState({
      pageToShow: "personItem",
      personIndex
    });
  };

  render() {
    const { t, i18n } = this.props;
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    const { pageToShow, persons, personIndex } = this.state;
    const randomIndex = Math.floor(Math.random() * persons.length);
    const app = {
      mainPage: <MainPage
        person={persons[randomIndex]}
        goToPersonPage={() => this.goToPersonPage(randomIndex)}
        t={t}
      />,
      personList: <PersonList persons={persons} goToPersonPage={this.goToPersonPage} />,
      personItem: <PersonItem person={persons[personIndex]} />,
    };
    return (
      <div className="App">
        <div className="loc-control">
          <button type="button" onClick={() => changeLanguage("ru")}>
            ru
          </button>
          <button type="button" onClick={() => changeLanguage("en")}>
            en
          </button>
          <button type="button" onClick={() => changeLanguage("by")}>
            by
          </button>
        </div>
        <Navigation
          goToMain={this.goToMain}
          goToPersonList={this.goToPersonList}
          t={t}
        />
        {app[pageToShow]}
      </div>
    );
  }
}

export default translate("translations")(App);
