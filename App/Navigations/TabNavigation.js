import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fav from "../Screens/Fav";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import Colors from "../Shared/Colors";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {  

  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.DARK,
      }}
      >
      <Tab.Screen 
        options={{
          tabBarLabel:"Home",
          tabBarIcon: ({ color, size })=>(
            <Ionicons name="home" color={color} size={size} />
          )
        }}
        name="Home" component={HomeNavigation} />
      <Tab.Screen 
        options={{
          tabBarLabel:"Search",
          tabBarIcon: ({ color, size })=>(
            <Ionicons name="search" color={color} size={size} />
          )
        }}
        name="Search" component={Search} />
      <Tab.Screen 
        options={{
          tabBarLabel:"Fav",
          tabBarIcon: ({ color, size })=>(
            <Ionicons name="ios-heart" color={color} size={size} />
          )
        }}
        name="Fav" component={Fav} />
      <Tab.Screen 
        options={{
          tabBarLabel:"Profile",
          tabBarIcon: ({ color, size })=>(
            <FontAwesome name="user-o" size={size} color={color} />
          )
        }}
        name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
