// import React from 'react'
// import GoogleMapReact from 'google-map-react';
// import { useState, useEffect } from 'react';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { Grid, Paper } from '@mui/material';

// const GoogleMaps = () => {
//     const [mapobj, setmapobj] = useState({ latitude: 23.0235063, longitude: 72.5323024 })



//     const defaultProps = {
//         center: {
//             lat: 23.0235063,
//             lng: 72.5323024
//         },
//         zoom: 15
//     };

//     function getUserLocation() {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(position => {
//                 const { latitude, longitude } = position.coords;
//                 setmapobj({ latitude, longitude })
//                 console.log(latitude, longitude)
//             }, error => {
//                 console.error(error.message);
//                 return null;
//             });
//         } else {
//             // Geolocation is not supported by this browser
//             console.error('Geolocation is not supported.');
//             return null;
//         }
//     }
//     const AnyReactComponent = () => <LocationOnIcon />;

//     return (<>
//         <div style={{ height: '400px', width: '400px', margin: "0 auto", borderRadius: "40px", overflow: "hidden" }}>
//             <GoogleMapReact
//                 options={{ fullscreenControl: false, keyboardShortcuts: false, mapTypeControl: true }}
//                 center={{ lat: mapobj.latitude, lng: mapobj.longitude }}
//                 zoom={15}
//                 bootstrapURLKeys={{ key: "" }}
//                 defaultCenter={defaultProps.center}
//                 defaultZoom={defaultProps.zoom}
//                 onChange={(value) => console.log(value)}
//             >
//                 <AnyReactComponent
//                     lat={mapobj.latitude}
//                     lng={mapobj.longitude}
//                 />
//             </GoogleMapReact>
//         </div>
//             <button onClick={() => getUserLocation()}>ff</button>
//     </>

//     )
// }

// export default GoogleMaps

import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class GoogleMaps extends Component {

    loadMap = (map, maps) => {
        let marker = new maps.Marker({
            position: { lat: 40.856795, lng: -73.954298 },
            map,
            draggable: true,
        });

    };

    render() {
        return (
            <div style={{ height: "400px", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
                    defaultZoom={10}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => {
                        let marker = new maps.Marker({
                            position: { lat: 40.756795, lng: -73.954298 },
                            map,
                            draggable: true,
                        });
                        maps.event.addListener(marker, 'dragend', () => {
                            const position = marker.getPosition();
                            console.log(position.lat(),position.lng())
                            console.log(typeof maps ,typeof map)
                        });
                    }}
                />
            </div>
        );
    }
}

export default GoogleMaps;

// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';
// import LocationOnIcon from '@mui/icons-material/LocationOn';


// const Map = () => {
//     const [markerPosition, setMarkerPosition] = useState(null);
//     const Marker = () => <LocationOnIcon />;

//     const handleMarkerClick = (event) => {
//         console.log(event)
//         setMarkerPosition({ lat: event.lat, lng: event.lng });
//     };

//     return (
//         <div style={{ height: '500px', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: '' }}
//                 defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
//                 defaultZoom={10}
//                 onClick={handleMarkerClick}
//             >
//                 {markerPosition && (
//                     <Marker
//                         lat={markerPosition.lat}
//                         lng={markerPosition.lng}
//                     />
//                 )}
//             </GoogleMapReact>
//         </div>
//     );
// };

// export default Map;


// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';

// const Map = () => {
//   const [markerPosition, setMarkerPosition] = useState(null);

//   const handleApiLoaded = (map, maps) => {
//     const marker = new maps.Marker({
//       position: { lat: 0, lng: 0 },
//       map,
//     });

//     // Update marker position state whenever the marker is dragged
//     maps.event.addListener(marker, 'dragend', () => {
//       const position = marker.getPosition();
//       setMarkerPosition({ lat: position.lat(), lng: position.lng() });
//     });
//   };

//   return (
//     <div style={{ height: '400px', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: ''}}
//         defaultCenter={{ lat: 0, lng: 0 }}
//         defaultZoom={5}
//         onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//       />
//       {markerPosition && (
//         <div>Marker position: {markerPosition.lat}, {markerPosition.lng}</div>
//       )}
//     </div>
//   );
// };

// export default Map;
