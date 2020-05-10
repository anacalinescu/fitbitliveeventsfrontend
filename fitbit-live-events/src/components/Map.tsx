import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const SimpleMap = (props: any) => {
    const [center, setCenter] = useState({lat: 44.439663, lng: 26.096306 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCbOlGzihHE5UWWUJumYW_yo-JfceHA6Iw' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={44.439663}
            lng={26.096306}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;