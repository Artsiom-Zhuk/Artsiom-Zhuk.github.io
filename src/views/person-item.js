import React, { Component } from "react";

class PersonItem extends Component {
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    if (nextProps.person.person === null) {
      this.props.history.push("/not-found");
    }
  }
  render() {
    const { person } = this.props;

    let personContent;
    personContent = (
      <div>
        <div className="row">
          <div className="col-md-6">
            <p>Back to person list</p>
          </div>
          <div className="col-md-6" />
        </div>
        <h2>Страница деятеля</h2>
        <p>Страница деятеля культуры</p>
        <p>{person.name}</p>
        <img src={`/assets/${person.titlePhoto}`} alt="" />
        <p>{person.birthDate}</p>
      </div>
    );
    return (
      <div className="person">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{personContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonItem;
