import {useState} from 'react';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';

const center = {
    lat: 23.8103,
    lng: 90.4125
};


const MapLocationInput = (props) => {

    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if(!isLoaded) {
        return <div>Loading...</div>
    }

    const setPosition = (lat, long) => {
        setLatitude(lat);
        setLongitude(long);
        props.getAddress(lat, long);
    }

    const inputStyle = {
        border: "none",  
        outline: "none", 
        padding: "10px", 
        boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)", 
        width: "300px"
    }
            
    return (

       <>
        <div className="d-flex justify-content-center">
            <div>
            <div>
                <form>
                    <label>Latitude</label>
                    <input type="text" className="m-3" style={inputStyle} placeholder="Latitude" value={latitude}></input>
                    <label>Longitude</label>
                    <input type="text" className="m-3" style={inputStyle} placeholder="Longitude" value={longitude}></input>
                </form>
            </div>
            <div>
                <div style={{width: "800px", height: "350px"}} id="source-map">
                    <GoogleMap center={center} zoom={12} mapContainerStyle={{width: "100%", height:"100%"}}>
                        <Marker position={center} draggable={true} onDragEnd={(e) => {
                            setPosition(e.latLng.lat(), e.latLng.lng());
                        } } />
                    </GoogleMap>
                </div>
            </div>
            </div>
        </div>
       </>
    );
    }
    export default MapLocationInput;