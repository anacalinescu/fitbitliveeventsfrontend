import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline
} from "react-google-maps";
import Button from '@material-ui/core/Button';

var my_path = []

class Map extends React.Component {
    state = {
        reload: false,
        path: []
    };


    onClick = (coord) => {
        my_path.push({ lat: coord.latLng.lat(), lng: coord.latLng.lng()})
        this.setState({
            path: [
              ...this.state.path,
              { lat: coord.latLng.lat(), lng: coord.latLng.lng()}
            ]
        });    
        this.refreshPage()
    }

    resetPath = () => {
        my_path = []
        this.setState({
            path: []
        });
    }

    refreshPage = () => {
        this.setState(
            {reload: true},
            () => this.setState({reload: false})
        )
    }

    render = () => {
        return (
            <div>
            <GoogleMap
                defaultZoom={16}
                defaultCenter={{ lat: 44.439663, lng: 26.096306 }}
                onClick={this.onClick}
            >
                <Polyline path={this.state.path} options={{ strokeColor: "#FF0000 " }} />
            </GoogleMap>
            <Button style={{ backgroundColor: '#00bcd4', top: '20px', position: 'relative'}}
            onClick={this.resetPath}>
                Reset
            </Button>
            </div>
            
        );
    };
}

const MapComponent = withScriptjs(withGoogleMap(Map));

export default ({props}) => (
    <div>
        <MapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbOlGzihHE5UWWUJumYW_yo-JfceHA6Iw&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `590px`, width: "900px", position :'absolute', left: '5%', top: '18%' }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
        <div style={{ display: 'none'}}>
            {props.path.push(my_path)}
       </div>
    </div>
);

