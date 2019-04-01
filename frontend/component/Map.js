import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";

const style = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends React.Component {
  state = { userLocation: { lat: 32, lng: 32 }, userLocation2: { lat: 32, lng: 32 }, userLocation3: { lat: 32, lng: 32 }, 
  userLocation4: { lat: 32, lng: 32 }, loading: true };


  componentDidMount(props) {
    window.addEventListener('resize', this.setMapCenter);

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          userLocation2: { lat: latitude+0.3, lng: longitude },
          userLocation3: { lat: latitude, lng: longitude+0.4 },
          userLocation4: { lat: latitude+0.2, lng: longitude+0.2 },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { loading, userLocation, userLocation2, userLocation3, userLocation4 } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }

    console.log(userLocation);
    return ( 
    <Map style={style} google={google} initialCenter={userLocation} zoom={17} onClick={this.onMapClick}>  
      <Marker
      name={'User Position'}
      onClick={this.onMarkerClick}
      position={userLocation}
      icon={{
        url: '../static/gmapsicon.png',
        anchor: new google.maps.Point(32,32),
        scaledSize: new google.maps.Size(32,32)
      }} />
      <Marker
      name={'Brians Taco'}
      onClick={this.onMarkerClick}
      position={userLocation2}
      icon={{
        url: '../static/gmapsicon.png',
        anchor: new google.maps.Point(32,32),
        scaledSize: new google.maps.Size(32,32)
      }} />
            <Marker
      name={'Sushi Runner'}
      onClick={this.onMarkerClick}
      position={userLocation3}
      icon={{
        url: '../static/gmapsicon.png',
        anchor: new google.maps.Point(32,32),
        scaledSize: new google.maps.Size(32,32)
      }} />
      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
      </InfoWindow>
    </Map> );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB_dtaEX9ncUDVITQv35ungjK-GWJ5ryME"
})(MapContainer);