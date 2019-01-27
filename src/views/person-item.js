import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

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
              <div className="text-center">
                <h1 className="display-4 text-center">{person.name}</h1>
              </div>
            </div>
            <div className="card card-body bg-light mb-3">
              <Timeline lineColor={"#ddd"}>
                {person.bio.map((item, i) => {
                  return (
                    <TimelineItem
                      key={i}
                      dateText={item.period}
                      style={{ color: "#e86971" }}
                    >
                      <p>{item.activity}</p>
                    </TimelineItem>
                  );
                })}
              </Timeline>
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
