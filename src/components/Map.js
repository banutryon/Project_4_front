import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
// import { formatRelative } from "date-fns"
import mapStyles from '../mapStyles'

const libraries = ["places"]

const mapContainerStyle = {
    width: "40vw",
    height: "50vh"
}

const center = {
    lat:45,
    lng:-75
}

// const InfoWindow ={
//     <Location/>
// }

const options ={
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export const Map = () => {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps";



    return (
        <div className="map">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}/>
        </div>
    )
}

export default Map