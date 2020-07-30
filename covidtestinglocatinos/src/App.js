import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import MapWithASearchBox from "./searchBox.js";

const mapStyles = {
  width: "100%",
  height: "100%",
};
class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
        style={mapStyles}
        zoom={8}
      >
        <Marker position={{ lat: 48.0, lng: -122.0 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBixvzbtmFQ-ogW62l7UKyKZXKs3zUUq5M",
})(MapContainer);
