// Library Imports:
import "./mapcontainer.css";
import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  // border: "2px solid black",
  width: "100%",
  height: "100%",
};

// onClick={this.onMarkerClick} name={"Mobility Motors Inköp"} 

// data: [
//   {
//     onClick: this.onMarkerClick, name: "Mobility Motors Inköp", position: { lat: 59.286637, lng: 17.93984 }, id: "Mobility Motors Inköp"
//   },
//   {
//     onClick: this.onMarkerClick, name: "Mobility Motors Bromma", position: { lat: 59.351080, lng: 17.956080 }, id: "Mobility Motors Bromma"
//   },
//   // {
//   //   onClick: this.onMarkerClick, name: "Mobility Motors Sätra", position: { lat: 59.286637, lng: 17.93984 }, id: "Mobility Motors Sätra"
//   // },
//   {
//     onClick: this.onMarkerClick, name: "Mobility Motors Lund", position: { lat: 55.683110, lng: 13.209580 }, id: "Mobility Motors Lund"
//   }
//   // {
//   //   onClick: this.onMarkerClick, name: "", position: { lat: 59.286637, lng: 17.93984 }, id: "Mobility Motors Inköp"
//   // }
// ]

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
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
          zoom={5.}
          style={mapStyles}
          initialCenter={{
            lat: 59.286637,
            lng: 17.93984,
          }}
        >
          {/* {
            data.map(item =>
              <Marker
                key={item.id}
                title={item.name}
                name={item.name}
                position={{ lat: item.lat, lng: item.lng }}
              />
            )
          } */}
          <Marker onClick={this.onMarkerClick} name={"Mobility Motors Inköp"} number={"076-404 01 01"} position={{ lat: 59.286637, lng: 17.93984 }} id={"Mobility Motors Inköp"} />
          <Marker onClick={this.onMarkerClick} name={"Mobility Motors Bromma"} number={"076-404 02 02"} position={{ lat: 59.351080, lng: 17.956080 }} id={"Mobility Motors Bromma"} />
          <Marker onClick={this.onMarkerClick} name={"Mobility Motors Lund"} number={"076-404 03 03"} position={{ lat: 55.683110, lng: 13.209580 }} id={"Mobility Motors Lund"} />
          <Marker onClick={this.onMarkerClick} name={"Svenska Bilgruppen Haninge"} number={"08-84 10 10"} position={{ lat: 59.172640, lng: 18.153590 }} id={"Svenska Bilgruppen Haninge"} />
          <Marker onClick={this.onMarkerClick} name={"Svenska Bilgrupped Södermalm"} number={"08-84 10 10"} position={{ lat: 59.316330, lng: 18.036870 }} id={"Svenska Bilgruupen Södermalm"} />
          <Marker onClick={this.onMarkerClick} name={"Hyundai Center Stockholm"} number={"077-55 050 60"} position={{ lat: 59.2864761, lng: 17.9405689 }} id={""} />
          <Marker onClick={this.onMarkerClick} name={"Bilsjärnan"} number={"023-78 31 00"} position={{ lat: 60.60357, lng: 15.62597 }} id={"Bilsjärnan"} />
          <Marker onClick={this.onMarkerClick} name={"Autostudio"} number={"040-651 30 70"} position={{ lat: 55.5690693, lng: 13.05323 }} id={"Autostudio"} />
          <Marker onClick={this.onMarkerClick} name={"Höglunds Bil"} number={"0176-174 30"} position={{ lat: 59.7472497, lng: 18.7375344 }} id={"Höglunds bil"} />
          <Marker onClick={this.onMarkerClick} name={"Mobility Motors Malmö"} number={"077-520 25 25"} position={{ lat: 55.5690693, lng: 13.05323 }} id={"Malmö"} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div className="flexbox-map-info-container">
              <h4>{this.state.selectedPlace.name}</h4>
              <div className="hrmap-line" />
              <p>Tel: {this.state.selectedPlace.number}</p>
              {/* <p>Öppettider: xxx</p> */}
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
