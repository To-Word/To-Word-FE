import React from 'react'
import { View,StyleSheet,TouchableOpacity ,Image} from 'react-native'
import logo from "../../images/Frame.png"
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
    return (
    <View style={styles.headerContainer}>
      <Ionicons name="options-sharp" size={24} color="black" />
      <Image style={styles.imageContain} source={logo}></Image>
    </View>
  )
}
const styles = StyleSheet.create({
    headerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#F49D1A"
    },
    imageContain:{
      resizeMode:"contain",
      alignItems:"center",
      justifyContent:"center",
      width: 50,
      height: 200,
    }
});

export default Header