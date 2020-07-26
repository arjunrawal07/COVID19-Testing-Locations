import React from "react";
import ReactDOM from "react-dom";

const mapStyles = {
  map: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
};

//Create component called CurrentLocation
export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);
    let { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng,
      },
    };
  }
  //Define recenterMap fx which only gets called when currentLocation in component's state is updated and uses .panTo() method to chance center of map
  recenterMap() {
      let map = this.map;
      let current = this.state.currentLocation;
      let google = this.props.google;
      let maps = google.maps;
      if (map) {
          let center = new maps.LatLng(current.lat, current.lng);
          map.panTo(center);
      }
  }
  //Check if map is loaded and if browser's current location is provided and recenter map to it
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }
}

export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: -1.2884,
    lng: 36.8233,
  },
  //Set map with center in case current location not provided
  centerAroundCurrentLocation: false,
  visible: true,
};
