import { View, Text, Image } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Shared/Colors';

export default function PlaceItem({place}) {
  return (
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 25
        }}>
          <View style={{padding: 5, paddingRight: 10}}>
            { place?.photos
              ?<Image 
                source={{uri: 
                  "https://maps.googleapis.com/maps/api/place/photo"
                  +"?maxwidth=400&photo_reference="
                  +place?.photos[0]?.photo_reference
                  +"&key=AIzaSyDqsv33IxhwSmtkQLVuuWJMlcoZv1hcHCw"
                }} 
                style={{width: 110, height: 110, borderRadius:20, objectFit: 'cover'}}
              />
          : <Image 
          source={require('../../../assets/placeholder.jpg')} 
          style={{width: 110, height: 110, borderRadius:20, objectFit: 'cover'}}
        />}
          </View>

        <View style={{flex: 1, marginVertical: 5, flexDirection: 'column', justifyContent: 'space-between', gap: 5 }}>
          <View>
            <Text style={{
              fontSize: 18, fontFamily: 'nunito',
            }} numberOfLines={2}>
              {place.name}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 15}} numberOfLines={2}>
              {place.vicinity}
            </Text>
          </View>
          {place.rating &&<View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <AntDesign name="star" size={20} color={Colors.YELLOW} />
            <Text>{place.rating}</Text>
          </View> }
        </View>

      </View>
  )
}