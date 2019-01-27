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
        <h2>Страница деятеля</h2>
        <p>Страница деятеля культуры</p>
        <p>{person.name}</p>
        <p>{person.birthDate}</p>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-info text-white mb-3">
              <div className="row">
                <div className="col-4 col-md-3 m-auto">
                  <img
                    className="rounded-circle"
                    src={`../assets/${person.titlePhoto}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
