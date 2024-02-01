import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class MapWithMarkerAndSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      latitude: 0,
      longitude: 0,
      zoom: 15
    };
  }

  handleSelect = async (address) => {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      this.setState({
        address: address,
        latitude: latLng.lat,
        longitude: latLng.lng
      });
    
  };
  
  
  handleMarkerPosition = (map, maps) => {
    const marker = new maps.Marker({
      position: { lat: this.state.latitude, lng: this.state.longitude },
      map,
      draggable: true
    });

    this.marker = marker;

    maps.event.addListener(marker, "dragend", (event) => {
      this.setState({
        latitude: event.latLng.lat(),
        longitude: event.latLng.lng()
      });
    });
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>

        <PlacesAutocomplete
          bootstrapURLKeys="AIzaSyDXAmylv9XMGd6W-rC-vfG0ayeBDQm6Q3M"
          value={this.state.address}
          onChange={(address) => this.setState({ address })}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places...",
                  className: "location-search-input"
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, { className, style })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>


        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
          options={{ fullscreenControl: false, keyboardShortcuts: false }}
          center={{ lat: this.state.latitude, lng: this.state.longitude }}
          zoom={this.state.zoom}
          onGoogleApiLoaded={({ map, maps }) => this.handleMarkerPosition(map, maps)}
        >
          <div lat={this.state.latitude} lng={this.state.longitude}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapWithMarkerAndSearch;
