import React, {useState, useRef} from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import "./Map.scss"

const lib = ['places'];

const containerStyle = {
  width: '290px',
  height: '250px',
  marginLeft: "50px",
  
};

const Map = ({
    getLatLng = () => {},
    lat = 12.295810,
    lng= 76.639381,
    editDetails = true,
    locationAddresh = ""
}) =>  {
    const inputBoxRef = useRef("");
    const [searchBox, setSearchBox] = useState(null);
    const [location, setLocation] = useState({
        lat: lat,
        lng: lng
    });

    const handleLoad = (ref) => {
        setSearchBox(ref);
    }


    const hanldePlacesChanged = () => {
        let latLng = searchBox.getPlaces()[0].geometry.location;
        getLatLng(
            latLng.lat(),
            latLng.lng(),
            searchBox.getPlaces()[0].formatted_address
        )
        setLocation({
            lat: latLng.lat(),
            lng: latLng.lng()
        })
    }


    const handleOnDragEndCursor = (event) => {
        const my_location = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        }
       
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ 'latLng': my_location }, function (results, status) {
            if (status === window.google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    let adrs_comp = results[0].address_components, loc_name, area_name;
                    let locName = [];
                    for(let i=1; i<adrs_comp.length; i++){
                        locName = [...locName, adrs_comp[i].long_name] 
                    }
                    inputBoxRef.current.value = locName.join();
                    
                    getLatLng(my_location.lat, my_location.lng, locName.join());
                    setLocation(my_location)
                   
                }
            }
        })
    }

    return (
        <div className='map'>
            {/* <SearchBox 
                setLocation={setLocation} 
                setChooseFormMap={setChooseFormMap} 
                chooseFromMap={chooseFromMap}
                locationName={locationName}
            /> */}
            <h6 className='location'>location</h6>
            <LoadScript
                googleMapsApiKey="AIzaSyAol1uOPzQnphvxtIatoLH-Ayw6OUwRpbA"
                libraries={lib}
                style={{
                    width: `100%`,
                    height: `100%`,
                    position: `relative`,
                    overflow: `revert`,
                    borderTop: `10rem solid black`,
                    marginLeft: "150px",
                }}
            >
                {editDetails ?
                    <StandaloneSearchBox
                        onLoad={handleLoad}
                        onPlacesChanged={hanldePlacesChanged}
                    >
                        <input
                            className='searchBox'
                            type="text"
                            placeholder="Customized your placeholder"
                            ref={inputBoxRef}
                            style={{
                                boxSizing: `border-box`,
                                border: `1px solid transparent`,
                                width: `240px`,
                                height: `32px`,
                                padding: `0 12px`,
                                borderRadius: `3px`,
                                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                fontSize: `14px`,
                                outline: `none`,
                                textOverflow: `ellipses`,
                                position: "absolute",
                                left: "50%",
                                marginLeft: "150px",
                                marginTop: "-3rem"
                              }}
                        />
                    </StandaloneSearchBox> : 
                    <p>{locationAddresh}</p>}
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={location}
                    zoom={10}
                >
                { /* Child components, such as markers, info windows, etc. */ }

                <Marker
                    position={location}
                    draggable={true}
                    onDragEnd={handleOnDragEndCursor}
                />

               
             
                    
                </GoogleMap>
               
            </LoadScript>
        </div>
    )
  
}

export default (Map)