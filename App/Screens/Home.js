import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Home/Header'
import GoogleMapView from '../Components/Home/GoogleMapView'
import CategoryList from '../Components/Home/CategoryList'
import GlobalApi from '../Services/GlobalApi'
import PlaceList from '../Components/Home/PlaceList'
import { UserLocationContext } from '../Context/UserLocationContext'

export default function Home() {

  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(()=>{
    if(location)
      GetNearbySearchPlace('restaurant');
  },[location])

  const GetNearbySearchPlace=(value)=>{
    console.log(value);
    location
      ? GlobalApi.nearByPlace(
          location.coords.latitude, location.coords.longitude,value
        ).then(resp=>{
          setPlaceList(resp.data.results);
        })
      : Alert.alert("Please check your Internet Connection")
  }

  return (
    <ScrollView style={{padding:12,paddingTop:40,flex:1}}>
        <Header/>
        <GoogleMapView placeList={placeList} mapSize={0.33} title={true} />
        <CategoryList setSelectedCategory={(value)=>GetNearbySearchPlace(value)}/>
       {placeList && <PlaceList placeList={placeList} />}
    </ScrollView>
  )
}