import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { userLocation: { lat: 32, lng: 32 } };
  }
  componentWillMount(props) {
    this.setState({
      userLocation: navigator.geolocation.getCurrentPosition(
        this.renderPosition
      ),
    });
  }
  renderPosition(position) {
    return { lat: position.coords.latitude, lng: position.coords.longitude };
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDn5XVYxz2sC6f4oshuE_4sqlFGLVuqIPA",
})(MapContainer);
