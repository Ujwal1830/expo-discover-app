import { View, Text, Dimensions, Image, TextInput } from "react-native";
import React, { useState } from "react";
import Colors from "../../Shared/Colors";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({setSearchText}) {

    const [searchInput, setSearchInput] = useState("");

    return (
        <View>
            <LinearGradient
                // Background Linear Gradient
                colors={[Colors.WHITE, "transparent"]}
                style={{padding: 20, width: Dimensions.get('screen').width}}
            >
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <Text style={{
                        fontFamily: 'nunito-bold',
                        fontSize: 35
                    }}>
                        Discover
                    </Text>
                    <Image 
                        source={require('../../../assets/user.png')}
                        style={{ width: 45, height: 45, borderRadius: 100}}
                    />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                }}>
                    <Ionicons style={{position: 'absolute', zIndex: 18, marginHorizontal: 10}} name="search" color={Colors.DARK} size={25} />
                    <TextInput 
                        style={{
                            backgroundColor: Colors.WHITE,
                            width: '100%',
                            paddingHorizontal: 15,
                            paddingLeft: 40,
                            paddingVertical: 10,
                            borderRadius: 5
                        }}
                        placeholder="Search"
                        onChangeText={(value)=> setSearchInput(value)}
                        onSubmitEditing={()=> setSearchText(searchInput)}
                    />
                </View>
            </LinearGradient>
        </View>
    );
}
