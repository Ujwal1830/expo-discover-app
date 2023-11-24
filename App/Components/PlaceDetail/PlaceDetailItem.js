import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Share } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import GoogleMapView from "../Home/GoogleMapView";
import SharePlace from "../../Services/Share";

export default function PlaceDetailItem({ place, onDirectionClick }) {
    return (
        <View>
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        fontFamily: "nunito-bold",
                    }}
                >
                    {place.name} <View
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    flexDirection: "row",
                }}
            >
                <AntDesign name="star" size={20} color={Colors.YELLOW} />
                <Text style={{ fontSize: 18 }}>{place.rating}</Text>
            </View>
                </Text>
            </View>
            
            <View style={{ marginTop: 5 }}>
                {place?.photos ? (
                    <Image
                        source={{
                            uri:
                                "https://maps.googleapis.com/maps/api/place/photo" +
                                "?maxwidth=400&photo_reference=" +
                                place?.photos[0]?.photo_reference +
                                "&key=AIzaSyDqsv33IxhwSmtkQLVuuWJMlcoZv1hcHCw",
                        }}
                        style={{ width: "100%", height: 250, borderRadius: 20 }}
                    />
                ) : (
                    <Image
                        source={require("../../../assets/placeholder.jpg")}
                        style={{ width: 110, height: 110, borderRadius: 20 }}
                    />
                )}
            </View>

            <View
                style={{
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    width: "90%",
                }}
            >
                <Image
                    source={require("../../../assets/marker2.png")}
                    style={{ width: 20, height: 50 }}
                />
                <Text style={{ fontSize: 15, fontFamily: "nunito" }} numberOfLines={3}>
                {place.vicinity?place.vicinity:place.formatted_address}
                </Text>
            </View>

            {place?.opening_hours ? (
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    backgroundColor: Colors.WHITE,
                    paddingHorizontal: 15,
                    marginTop:5,
                    marginBottom: 10,
                    borderRadius: 40,
                    width: place?.opening_hours?.open_now == true ? 90 : 100
                }}
                >
                    <View style={{
                        backgroundColor: place?.opening_hours?.open_now == true ? Colors.GREEN : Colors.RED,
                        width: 10,
                        height: 10,
                        borderRadius: 100
                    }} />
                    <Text style={{ fontFamily: "nunito" }}>
                        {place?.opening_hours?.open_now == true ? "OPEN" : "CLOSED"}
                    </Text>
                </View>
            ) : null}

            <View style={styles.buttonLayout}>
                <TouchableOpacity onPress={()=>onDirectionClick()} style={styles.button}>
                    <Entypo name="direction" size={25} color={'white'} />
                    <Text style={{fontSize: 20, fontFamily: "nunito", color: 'white' }} >Direction</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>SharePlace(place)} style={styles.button}>
                    <Ionicons name="share-outline" size={25} color="white" />
                    <Text style={{fontSize: 20, fontFamily: "nunito", color: 'white' }} >Share</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: Colors.DARK,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
    },
    buttonLayout: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },
})
