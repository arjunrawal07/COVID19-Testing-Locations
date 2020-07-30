// import React from "react";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";
// import SearchBox from "react-google-maps/lib/components/places/SearchBox";

// const _ = require("lodash");
// const google = window.google;
// const { compose, withProps, lifecycle } = require("recompose");

// class MapWithASearchBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       refs: {},
//       bounds: null,
//       center: {
//         lat: 41.9,
//         lng: -87.624,
//         googleMapURL:
//           "https://maps.googleapis.com/maps/api/js?key=AIzaSyBixvzbtmFQ-ogW62l7UKyKZXKs3zUUq5M&libraries=places",
//         loadingElement: <div style={{ height: `100%` }} />,
//         containerElement: <div style={{ height: `400px` }} />,
//         mapElement: <div style={{ height: `100%` }} />,
//       },
//     };
//     //   lifecycle({
//     //     componentWillMount() {
//     //       console.log(google);
//     //       let refs = {};
//     //       this.setState({
//     //         bounds: null,
//     //         center: {
//     //           lat: 41.9,
//     //           lng: -87.624,
//     //         },
//     onBoundsChanged = () => {
//       this.setState({
//         bounds: refs.map.getBounds(),
//         center: refs.map.getCenter(),
//       });
//     };
//     onSearchBoxMounted = (ref) => {
//       this.state.refs.searchBox = ref;
//     };
//     onPlacesChanged = () => {
//       let places = refs.searchBox.getPlaces();
//       let bounds = new google.maps.LatLngBounds();

//       places.forEach((place) => {
//         if (place.geometry.viewport) {
//           bounds.union(places.geometry.viewport);
//         } else {
//           bounds.extend(place.geometry.location);
//         }
//       });
//       const nextMarkers = places.map((place) => ({
//         position: place.geometry.location,
//       }));
//       const nextCenter = _.get(nextMarkers, "0.position", this.state.center);

//       this.setState({
//         center: nextCenter,
//         markers: nextMarkers,
//       });
//     };
//     withScriptjs();
//     withGoogleMap();
//   }
//   render() {
//     return (
//       <GoogleMap
//         ref={props.onMapMounted}
//         defaultZoom={14}
//         center={props.center}
//         onBoundsChanged={props.onBoundsChanged}
//       >
//         <SearchBox
//           ref={props.onSearchBoxMounted}
//           bounds={props.bounds}
//           //   position={maps.ControlPosition.TOP_RIGHT}
//           onPlacesChanged={props.onPlacesChanged}
//         >
//           <input
//             type="text"
//             placeholder="Customized your placeholder"
//             style={{
//               boxSizing: `border-box`,
//               border: `1px solid transparent`,
//               width: `240px`,
//               height: `32px`,
//               marginTop: `27px`,
//               padding: `0 12px`,
//               borderRadius: `3px`,
//               boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//               fontSize: `14px`,
//               outline: `none`,
//               textOverflow: `ellipses`,
//             }}
//           />
//         </SearchBox>
//         {/* {props.markers.map((marker, index) => (
//       <Marker key={index} position={marker.position} />
//     ))} */}
//       </GoogleMap>
//     );
//   }
// }
// export default MapWithASearchBox;
