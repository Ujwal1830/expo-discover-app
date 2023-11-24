import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../Shared/Colors'
import BusinessListItem from './BusinessListItem';
import { useNavigation } from '@react-navigation/native'

export default function BusinessList({ placeList }) {

    const navigator = useNavigation();

  return (
    <View>
        <LinearGradient
            colors={['transparent', Colors.WHITE]}
            style={{padding: 20, width: Dimensions.get('screen').width}}
        >
            <FlatList 
            horizontal
                data={placeList}
                renderItem={({item, index}) => (
                    <TouchableOpacity onPress={()=> navigator.navigate('place-detail', {place: item})}>
                        <BusinessListItem place={item} />
                    </TouchableOpacity>
                )}
            />
        </LinearGradient>
    </View>
  )
}