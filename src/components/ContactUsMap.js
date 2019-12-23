import React, { Component } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

class ContactUsMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true,
    })
  }

  onMapClick = () => {
    if (this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    const style = {
      width: `100%`,
      height: `100%`,
      marginLeft: `auto`,
      marginRight: `auto`,
    }
    return (
      <Map
        className="mymap"
        onClick={this.onMapClick}
        google={this.props.google}
        zoom={14}
        style={style}
        initialCenter={{
          lat: 41.724958,
          lng: -73.243417,
        }}>
        <Marker
          onClick={this.onMarkerClick}
          title={"RTLC"}
          position={{ lat: 41.724958, lng: -73.243417 }}
          name={"RTLC"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showInfoWindow}>
          <div>
            <h3>Rebuilding Together Litchfield</h3>
            <p>
              30 Bantam Terrace, Bantam, CT 06750
              <br />
              203-240-9666
            </p>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAepVUqh9DUxs5_MQ3B9fuWiDh3g2shLEM",
})(ContactUsMap)
