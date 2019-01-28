import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCll9zAc9un31wk8IYNfgfDGEwjDJrFZ9g&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  console.log(props);
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: Number(props.lat), lng: Number(props.lng) }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: Number(props.lat), lng: Number(props.lng) }}
          onClick={props.onMarkerClick}
        />
      )}
    </GoogleMap>
  );
});

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        lat={this.props.lat}
        lng={this.props.lng}
      />
    );
  }
}

export default MyFancyComponent;
