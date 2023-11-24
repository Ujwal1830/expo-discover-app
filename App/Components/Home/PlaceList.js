import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'
import PlaceItemBig from './PlaceItemBig'
import { useNavigation } from '@react-navigation/native'

export default function PlaceList({placeList}) {

  const navigator = useNavigation();
  const onPlaceClick=(item)=>{
    navigator.navigate('place-detail', {place: item});
  }

  return (
    <View>
      <Text style={{
        fontSize: 20, fontFamily: 'nunito', marginTop: 10,
        }}>
        Found {placeList.length} Places
      </Text>

      <FlatList 
        data={placeList}
        renderItem={({item, index})=>(
          <TouchableOpacity
            onPress={()=>onPlaceClick(item)}
          >
            {index==0 || index==1 
              ? <PlaceItem place={item} />
              : index%3==0 
                ? <PlaceItemBig place={item} />
                : <PlaceItem place={item} />
            }

          </TouchableOpacity>
        )}
      />
    </View>
  )
}