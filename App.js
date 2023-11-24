import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useEffect, useState } from 'react';
import { UserLocationContext } from './App/Context/UserLocationContext';
import * as Location from 'expo-location';
import { useFonts } from "expo-font"


export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fontsLoaded] = useFonts({
    'nunito': require('./assets/Fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/Fonts/Nunito-SemiBold.ttf'),
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <UserLocationContext.Provider 
    value={{location,setLocation}}>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
      </UserLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
