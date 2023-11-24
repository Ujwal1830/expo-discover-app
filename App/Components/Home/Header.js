import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react';
import Colors from '../../Shared/Colors';


export default function Header() {
  return (
    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', gap: 10}}>
      <Image style={styles.logo} source={require('../../../assets/logo.png')} />

      <View>
        <TextInput style={styles.searchBar} placeholder='Search' />
      </View>

      <Image style={styles.userImage} source={require('../../../assets/user.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: 45,
        height: 45,
        transform: [{ rotate: '-90deg' }],
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15
      },
      searchBar:{
        width: Dimensions.get('screen').width*0.6,
        borderWidth: 1,
        borderColor: Colors.dark,
        paddingHorizontal: 15,
        paddingVertical:5,
        borderRadius: 50,
      },
      userImage: {
        width:50,
        height: 50,
        borderRadius: 50,
      }
})