import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import Home from '../Screens/Home';
import Colors from '../Shared/Colors';
import PlaceDetail from '../Components/PlaceDetail/PlaceDetail';

export default function HomeNavigation() {

    const Stack = createStackNavigator();

    const isAndroid = true;

  return (
    
    <Stack.Navigator 
        screenOptions={{
            tabBarActiveTintColor: Colors.DARK,
            gestureEnabled: true,
            ...(isAndroid && TransitionPresets.ModalPresentationIOS),
        }}
    >
      <Stack.Screen options={{
        headerShown: false
      }}
        name='home-screen' component={Home}
      />
      <Stack.Screen options={{
        presentation: 'modal',
        title: 'Details',
      }}
        name='place-detail' component={PlaceDetail}
      />
    </Stack.Navigator>
  )
}