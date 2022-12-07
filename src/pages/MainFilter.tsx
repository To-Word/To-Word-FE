import React from 'react'
import { View,Text,StyleSheet, Button } from 'react-native'

const MainFilter = () => {
    const handlePress = () => {

    }
    return (
    <View style={styles.container}>
        <Button
            onPress={handlePress}
            title="<-"
            color="black"/>
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