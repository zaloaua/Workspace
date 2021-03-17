import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'



const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

export const Map = ({ location, zoomLevel }) => {
  return (
    <div className="container bg-grey-lighter p-8">
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Spaces</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDgz2g3QBQeSfideBTX2zve9cDJocODVNs' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
    </div> </div>
);
  };

