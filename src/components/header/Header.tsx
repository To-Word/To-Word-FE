import React from 'react'
import { View,StyleSheet ,Image} from 'react-native'
import logo from "../../images/Frame.png"

const Header = () => {
    return (
    <View style={styles.headerContainer}>
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