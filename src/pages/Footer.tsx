import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'

type RootStackParamList = {
  Main: undefined,
  Next: undefined;
};


const Footer = () => {
    return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.footBtn}><Text>여기1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.footBtn}><Text>여기2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.footBtn}><Text>여기3</Text></TouchableOpacity>
      <TouchableOpacity style={styles.footBtn}><Text>여기4</Text></TouchableOpacity>
      <TouchableOpacity style={styles.footBtn}><Text>여기5</Text></TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      backgroundColor: "#FF865E",
    },
    footBtn : {
      flex:1,
      backgroundColor:"yellow",
      borderRadius:10,
      height:35,
      marginLeft:10,
      marginRight:10,
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default Footer