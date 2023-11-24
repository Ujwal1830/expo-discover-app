import { View, Text, TouchableOpacity, Platform, Linking, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import {useRoute } from '@react-navigation/native'
import PlaceDetailItem from './PlaceDetailItem';
import GoogleMapView from '../Home/GoogleMapView';
import Colors from '../../Shared/Colors';

export default function PlaceDetail(props) {

  const [headerTitle, setHeaderTitle] = useState('Default Title');

  const parama = useRoute().params;
  const [place, setPlace] = useState([]);
  
  useEffect(() => {
    setPlace(parama.place);
  }, []);

  const onDirectionClick=()=>{
    const URL = Platform.select({
      ios: "maps:"+place.geometry.location.lat+","+place.geometry.location.lng+"?q="+place.name+" "+place.vicinity,
      android: "geo:"+place.geometry.location.lat+","+place.geometry.location.lng+"?q="+place.name+" "+place.vicinity,
    });

    Linking.openURL(URL);
  }

  return (
    <ScrollView style={{
      padding: 10, flex: 1,
    }}>
      <PlaceDetailItem place={place} onDirectionClick={onDirectionClick} />
      
      <GoogleMapView placeList={[place]} mapSize={0.23} title={false} />
      
      <TouchableOpacity style={{
          backgroundColor: Colors.DARK,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
          marginTop: 10,
        }}
        onPress={()=>onDirectionClick()}
      >
        <Text style={{
          fontFamily: 'nunito',
          fontSize: 18,
          color: 'white',
          textAlign: 'center',
        }}>Get Direction on Google Maps</Text>
      </TouchableOpacity>

      <View style={{
        height: 15, width: '100%'
      }}>
        
      </View>
    </ScrollView>
  )
}