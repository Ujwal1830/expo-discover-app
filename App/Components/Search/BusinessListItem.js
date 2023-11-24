import { View, Text, Image } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Shared/Colors';

export default function BusinessListItem({ place }) {

    

  return (
    <View style={{
        width:140,backgroundColor:Colors.WHITE,
        borderRadius:10,padding:5,margin:5,elevation:0.4
    }}>
     {place?.photos?  <Image
        source={{uri:
          "https://maps.googleapis.com/maps/api/place/photo" +
          "?maxwidth=400" +
          "&photo_reference=" +
          place?.photos[0]?.photo_reference +
          "&key=AIzaSyDqsv33IxhwSmtkQLVuuWJMlcoZv1hcHCw",
        }}
        style={{ width: '100%', height: 80, borderRadius: 10 }}
      />:
      <Image source={require('./../../../assets/placeholder.jpg')}
      style={{ width: '100%', height: 80, borderRadius: 10 }}
      />}
            <Text 
              numberOfLines={2}
            style={{fontFamily:'nunito-bold',
            fontSize:12,marginTop:5}}>{place.name}</Text>
             <Text 
             numberOfLines={2}
             style={{fontFamily:'nunito',
            fontSize:10,marginTop:5,color:Colors.DARK_GRAY}}>
                {place.vicinity?place.vicinity:place.formatted_address}</Text>
              <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginTop:5,
            flexDirection: "row",
            marginBottom:-5
          }}
        >
          <AntDesign name="star" size={15} color={Colors.YELLOW} />
          <Text style={{fontFamily:'nunito',
            fontSize:10,marginTop:5,color:Colors.DARK_GRAY}}>{place.rating}</Text>
        </View>
    </View>
  )
}