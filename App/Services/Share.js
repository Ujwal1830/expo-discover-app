import { Share } from "react-native";


export default function SharePlace(place){

    const URL = 'https://maps.google.com/?q='+encodeURIComponent(place.name);
    const ADDRESS = place.vicinity || place.formatted_address;
    
    Share.share({
        title: "Share Business",
        message:`Business Name :: ${place.name} \nAddress :: ${ADDRESS}\nUrl:: ${URL}`,
    })
}

// https://maps.app.goo.gl/19.9544923,79.2953744
// UL2QdedcJ8XzNcRT8