// Library Imports:
import "./mapcontainer.css";
import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  // border: "2px solid black",
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    marks: [],
  };

  onMarkerClick = (props, marker, e) => {
    console.log("Hi")
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div className="map-area">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 59.286637,
            lng: 17.93984,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"Mobility Motors Inköp"} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div className="flexbox-map-info-container">
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyADa2EfRJSF4uN_frF8_gHAF3sS66_U9Oc",
})(MapContainer);
