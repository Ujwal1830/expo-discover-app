import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import { TouchableOpacity } from 'react-native'

export default function CategoryList({setSelectedCategory}) {

  const categoryList=[
    {
        id:1,
        name:'Gas Station',
        value:'gas_station',
        icon:require('../../../assets/gas.png')
    },
    {
      id:2,
      name:'Atm',
      value:'atm',
      icon:require('../../../assets/atm.png')
    },
    {
      id:3,
      name:'Bank',
      value:'bank',
      icon:require('../../../assets/bank.png')
    },
    {
      id:4,
      name:'Restaurants',
      value:'restaurant',
      icon:require('../../../assets/food.png')
    },
    {
        id:5,
        name:'Cafe',
        value:'cafe',
        icon:require('../../../assets/cafe.png')
    },
  ]

  return (
    <View style={{marginTop: 10}}>
      <Text style={{
        fontSize: 20,
        fontFamily: 'nunito',
        
      }}>Select Top Category</Text>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop:5}}
        renderItem={({item})=>(
          <TouchableOpacity 
          onPress={()=>setSelectedCategory(item.value)} >
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />

    </View>
  )
}