import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";
import PlaceMarker from "../Home/PlaceMarker";
import Colors from "../../Shared/Colors";

export default function GoogleMapViewFull({ placeList }) {
    const [mapRegion, setmapRegion] = useState([]);

    const { location, setLocation } = useContext(UserLocationContext);
    console.log(location);
    useEffect(() => {
        if (location) {
            setmapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.0421,
            });
        }
    }, [location]);

    return (

        <View style={{
        }}>
            {location ? <MapView
                style={{
                    width: Dimensions.get("screen").width,
                    height: Dimensions.get("screen").height * 0.89,

                }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                region={mapRegion}
            >
                {/* <Marker title="You" coordinate={mapRegion}/> */}
                {placeList?.map((item,index)=>index<10 && (
                    <PlaceMarker item={item} key={index} />
              ))}

            </MapView> : null}

        </View>
    );
}
