import React from 'react'
import { View,Text,StyleSheet, Alert, TouchableOpacity } from 'react-native'

const MainFilter = () => {
    const handlePress = () => {
      alert("응애")
    }
    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>뒤로가기</TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    backBtn : {
        flex:1,
        backgroundColor:"white",
    }
});

export default MainFilter