import React from 'react'
import { View,Text,StyleSheet, Alert, TouchableOpacity ,Image} from 'react-native'
import logo from "../../images/logo.png"

const Header = () => {
    return (
    <View style={styles.container}>
        <Image style={styles.imageContain} source={logo}></Image>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"F49D1A"
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