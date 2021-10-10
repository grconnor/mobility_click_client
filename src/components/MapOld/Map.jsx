// Library Imports:
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// Component Imports:

// Image Imports:

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.286637,
      lng: 17.939840
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          // center={this.state.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          bootstrapURLKeys={{
            key: 'AIzaSyADa2EfRJSF4uN_frF8_gHAF3sS66_U9Oc',
            language: 'en'
          }}

        >
          <AnyReactComponent
            lat={59.286637}
            lng={17.939840}
            text="INKÖP"
          />
          <Marker lat={59.286637} lng={17.939840} />
        </GoogleMapReact>
      </div>
    );
  }
}

const Marker = props => {
  return <div className="SuperAwesomePin"></div>
}

export default SimpleMap;