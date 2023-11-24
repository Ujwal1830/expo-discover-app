import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

export default function CategoryItem({category}) {


  return (
    <View style={{ alignItems:'center',
    marginHorizontal:5,width:120,height:70,justifyContent:'center',
    borderRadius:20,
    backgroundColor: 'white'}}>
        <Image source={category.icon}
            style={{width:50,height:50}}
        />
      <Text style={{fontSize:13,fontFamily:'nunito'}}>
        {category.name}</Text>
    </View>
  )
}