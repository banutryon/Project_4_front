import React, { useState, useRef, Children } from "react"
import useSwr from "swr"
import GoogleMapReact from "google-map-react"
// import mapStyles from '../mapStyles'
import useSupercluster from "use-supercluster"
const options = {
    // styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({children}) => children;

const InfoWindow = ({children}) => children

export const Map = () => {

    // Map Config
    const mapRef = useRef();
    const [zoom, setZoom] = useState(10);
    const [bounds, setBounds] = useState(null);

    // load and format data
    const url = 'https://altliving.herokuapp.com/locations/'
    const {data, error} = useSwr(url, fetcher);
    const locations = data && !error ? data: [];
    const points = locations.map(location => ({
        type: "Feature",
        properties: {
            cluster: false,
            locationId: location.id
        },
        geometry: {
            type: "Point",
            coordinates: [
                parseFloat(location.lng), 
                parseFloat(location.lat)]
        }
    }));

    // get clusters
    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: {radius: 75, maxZoom: 20}
    })

    // Info window
    const {selectedCenter, setSelectedCenter} = useState(null);

    return (
        <div className="map" style={{ height: "50vh", width: "40vw" }}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter={{lat: 39.5, lng: -98.35}}
                defaultZoom={3.5}
                options={options}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({map}) => {
                    mapRef.current = map;
                }}
                onChange={({zoom, bounds}) => {
                    setZoom(zoom);
                    setBounds([
                        bounds.nw.lng,
                        bounds.se.lat,
                        bounds.se.lng,
                        bounds.nw.lat
                    ]);
                }}
            >
                {clusters.map(cluster => {
                    const [lng, lat] = cluster.geometry.coordinates;
                    const {
                        cluster: isCluster, 
                        point_count: pointCount
                    } = cluster.properties;

                    if (isCluster) {
                        
                        return (
                            <Marker 
                                key={cluster.id}
                                lat={lat}
                                lng={lng}

                                >
                                <div 
                                    className="cluster-marker"
                                    style={{
                                        width: `${10 + (pointCount / points.length) * 20}px`,
                                        height: `${10 + (pointCount / points.length) * 20}px`
                                    }}
                                    onClick={() => {
                                        const expansionZoom = Math.min(
                                            supercluster.getClusterExpansionZoom(cluster.id),
                                            20
                                        );
                                        mapRef.current.setZoom(expansionZoom);
                                        mapRef.current.panTo({ lat: lat, lng: lng})
                                        // setSelectedCenter(cluster)
                                    }}
                                >
                                    {pointCount}
                                </div>
                                {/* {selectedCenter && (
                                <InfoWindow
                                 onCloseClick={() => {
                                    setSelectedCenter(null);
                                  }}
                                 position={{
                                    lat: selectedCenter.latitude,
                                    lng: selectedCenter.longitude
                                 }}
                                 >
                                 </InfoWindow>
                                 )} */}
                                
                            </Marker>
                        )
                    }
                    return (
                        <Marker 
                        key={cluster.properties.locationId}
                        lat={lat}
                        lng={lng}
                        >
                        <button style={{background: "none", border: "none"}}>
                            <img src="https://i.imgur.com/OrUiy95.png"
                            style={{height: "45px", width: "45px"}}/>
                        </button >
                    </Marker>
                    )

                })}
                {/* {locations.map(location => (
                    <Marker 
                        key={location.id}
                        lat={location.lat}
                        lng={location.lng}
                        >
                        <button style={{background: "none", border: "none"}}>
                            <img src="https://i.imgur.com/OrUiy95.png"
                            style={{height: "45px", width: "45px"}}/>
                        </button >
                    </Marker>
                ))} */}
            </GoogleMapReact>
        </div>
    )
}


export default Map