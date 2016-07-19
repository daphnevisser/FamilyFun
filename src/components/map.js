import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default Map = (props) => {
    return (
        <GoogleMapLoader
            containerElement={
                <div style={{height: '100%'}}/>
            }
            googleMapElement={
                <GoogleMap
                    defaultZoom={15}
                    center={{ lat: props.lat, lng: props.lon }}
                >
                {props.markers.map((marker, index) => {
                    return (
                        <Marker { ...marker } />
                    );
                })}
                </GoogleMap>
            }
        />
    );
}
