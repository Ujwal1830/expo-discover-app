import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";
import PlaceMarker from "./PlaceMarker";
import Colors from "../../Shared/Colors";

export default function GoogleMapView({placeList, mapSize, title}) {
    const [mapRegion, setmapRegion] = useState([]);
  
    const { location, setLocation } = useContext(UserLocationContext);
    console.log(location);
    useEffect(()=>{
      if(location)
      {
          setmapRegion({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0400,
              longitudeDelta: 0.0421,
          })
      }
    },[location])
   
  
    return (
      <View style={{ marginTop: 10 }}>
        {title && <Text style={{ fontSize: 20, 
          marginBottom: 10, fontWeight: "600", fontFamily: 'nunito' }}>
          Top Near By Places
        </Text> }
        <View style={{ borderRadius: 20, overflow: "hidden" }}>
      {location ? <MapView
            style={{
              width: Dimensions.get("screen").width * 0.95,
              height: Dimensions.get("screen").height * mapSize,
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
          >
              {/* {title && <Marker 
              title="You" 
              coordinate={mapRegion}
               />} */}
              {placeList?.map((item,index)=>index<10 && (
                  <PlaceMarker item={item} key={index} />
              ))}
             
          </MapView> : null} 
          
        </View>
       
      </View>
    );
  }