// import React, { useState, useRef, Children } from "react"
// import useSwr from "swr"
// import GoogleMapReact from "google-map-react"
// // import mapStyles from '../mapStyles'
// import useSupercluster from "use-supercluster"


// const fetcher = (...args) => fetch(...args).then(response => response.json());

// const Marker = ({children}) => children;

// export const Map = () => {
//     // Map Config
//     const mapRef = useRef();
//     const [zoom, setZoom] = useState(10);
//     const [bounds, setBounds] = useState(null);

//     // load and format data
//     const url = 'https://altliving.herokuapp.com/locations/'
//     const {data, error} = useSwr(url, fetcher);
//     const locations = data && !error ? data: [];
//     const points = locations.map(location => ({
//         type: "Feature",
//         properties: {
//             cluster: false,
//             locationId: location.id
//         },
//         geometry: {
//             type: "Point",
//             coordinates: [
//                 parseFloat(location.lng), 
//                 parseFloat(location.lat)]
//         }
//     }));

//     // get clusters
//     const { clusters, supercluster } = useSupercluster({
//         points,
//         bounds,
//         zoom,
//         options: {radius: 75, maxZoom: 20}
//     })


//     return (
//         <div className="map" style={{ height: "50vh", width: "40vw" }}>
//             <GoogleMapReact 
//                 bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
//                 defaultCenter={{lat: 39.5, lng: -98.35}}
//                 defaultZoom={3.5}
//                 options={options}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({map}) => {
//                     mapRef.current = map;
//                 }}
//                 onChange={({zoom, bounds}) => {
//                     setZoom(zoom);
//                     setBounds([
//                         bounds.nw.lng,
//                         bounds.se.lat,
//                         bounds.se.lng,
//                         bounds.nw.lat
//                     ]);
//                 }}
//             >
//                 {clusters.map(cluster => {
//                     const [lng, lat] = cluster.geometry.coordinates;
//                     const {
//                         cluster: isCluster, 
//                         point_count: pointCount
//                     } = cluster.properties;

//                     if (isCluster) {
//                         return (
//                             <Marker 
//                                 key={cluster.id}
//                                 lat={lat}
//                                 lng={lng}>
//                                 <div 
//                                     className="cluster-marker"
//                                     style={{
//                                         width: `${10 + (pointCount / points.length) * 20}px`,
//                                         height: `${10 + (pointCount / points.length) * 20}px`
//                                     }}
//                                     onClick={() => {
//                                         const expansionZoom = Math.min(
//                                             supercluster.getClusterExpansionZoom(cluster.id),
//                                             20
//                                         );
//                                         mapRef.current.setZoom(expansionZoom);
//                                         mapRef.current.panTo({ lat: lat, lng: lng})
//                                     }}
//                                 >
//                                     {pointCount}
//                                 </div>
//                             </Marker>
//                         )
//                     }
//                     return (
//                         <Marker 
//                         key={cluster.properties.locationId}
//                         lat={lat}
//                         lng={lng}
//                         >
//                         <button style={{background: "none", border: "none"}}>
//                             <img src="https://i.imgur.com/OrUiy95.png"
//                             style={{height: "45px", width: "45px"}}/>
//                         </button >
//                     </Marker>
//                     )

//                 })}
//                 {/* {locations.map(location => (
//                     <Marker 
//                         key={location.id}
//                         lat={location.lat}
//                         lng={location.lng}
//                         >
//                         <button style={{background: "none", border: "none"}}>
//                             <img src="https://i.imgur.com/OrUiy95.png"
//                             style={{height: "45px", width: "45px"}}/>
//                         </button >
//                     </Marker>
//                 ))} */}
//             </GoogleMapReact>
//         </div>
//     )
// }



import  React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import useSwr from "swr";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const options = {
    // styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

const MyMap = () => {

// load and format data
const fetcher = (...args) => fetch(...args).then(response => response.json());
const url = 'https://altliving.herokuapp.com/locations/'
const {data, error} = useSwr(url, fetcher);
const locations = data && !error ? data: [];
const [selectedLocation, setSelectedLocation] = useState(null);
const settings = {
    dots: true, 
    infinite: true,
    fade: true, 
    speed: 500,
    slidesToScroll:1,
    slidesToScrool:1, 
    className: "slides"
}
    return(
        <GoogleMap
            defaultCenter={{lat: 39.5, lng: -98.35}}
            defaultZoom={3.5}
            disableDefaultUI={true}
        >
            {locations.map((location)=>{
                console.log(location)
                return (
                <Marker
                    onClick={() => {
                        setSelectedLocation(location)
                    }}
                    key={location.id}
                    position={{
                        lat: parseInt(location.lat),
                        lng: parseInt(location.lng)
                    }}
                />
                )
            })}
            {selectedLocation && (
                <InfoWindow
                    onCloseClick={()=>{
                        setSelectedLocation(null)
                    }}
                    position={{
                        lat: parseInt(selectedLocation.lat),
                        lng: parseInt(selectedLocation.lng)
                    }}
                >
                    <div>
                        <h3>{selectedLocation.name}</h3>
                        <Slider {...settings}>
                            <img className="mapimg" src={selectedLocation.img1} alt="images" />
                            <img className="mapimg" src={selectedLocation.img2} alt="images" />
                            <img className="mapimg" src={selectedLocation.img3} alt="images" />
                        </Slider>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(MyMap));


export const Map = () => {
    return (
        <div className="map">
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
        </div>
    )
}
export default Map