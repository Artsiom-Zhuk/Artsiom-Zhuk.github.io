import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import YouTube from "react-youtube";

import MyFancyComponent from "../component/Map";

class PersonItem extends Component {
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    if (nextProps.person.person === null) {
      this.props.history.push("/not-found");
    }
  }
  render() {
    const { person: { name, birthDate, titlePhoto, bio, works, photos, video } } = this.props;
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1
      }
    };

    let personContent;
    personContent = (
      <div>
        <h2>Страница деятеля</h2>
        <p>Страница деятеля культуры</p>
        <p>{name}</p>
        <p>{birthDate}</p>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-info text-white mb-3">
              <div className="row">
                <div className="col-4 col-md-3 m-auto">
                  <img
                    className="rounded-circle"
                    src={`../assets/${titlePhoto}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="display-4 text-center">{name}</h1>
              </div>
            </div>
            <div className="card card-body bg-light mb-3">
              <h3 className="text-center text-info">Биография</h3>
              <Timeline lineColor={"#ddd"}>
                {bio.map((item, i) => {
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
              <hr />
              <h3 className="text-center text-info">Список произведений</h3>
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <div className="row">
                  {works.map((work, index) => (
                    <div
                      key={index}
                      className="col-12 col-md-12 m-auto text-center"
                    >
                      <i className="fa fa-check pr-1" />
                      {work}
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <h3 className="text-center text-info">Галерея</h3>
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <div className="row">
                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="col-4 col-md-4 m-auto text-center"
                    >
                      <img className="" src={`../assets/${photo}`} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <h3 className="text-center text-info">Видео</h3>
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <div className="row">
                  <YouTube
                    videoId={video}
                    opts={opts}
                    onReady={this._onReady}
                  />
                </div>
              </div>
              <hr />
              <div id="mapid">
                <MyFancyComponent />
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
  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default PersonItem;
