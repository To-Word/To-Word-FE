import React from 'react'
import { View,StyleSheet,TouchableOpacity,Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const MainContainer = () => {
    return (
    <View style={styles.container}>
      <Ionicons name="options-sharp" size={34} color="black" style={styles.logoFlex}/>
      <View style={styles.headContainer}>
        <TouchableOpacity style={styles.headContainerBtn1}><Text style={styles.headText}>E</Text></TouchableOpacity>
        <TouchableOpacity style={styles.headContainerBtn2}><Text style={styles.headText}>I</Text></TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contents}>

        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 9,
      alignItems: 'center',
      backgroundColor: "#FEF9EF",
    },
    logoFlex:{
      flexDirection:"row",
      alignSelf: 'flex-start',
      marginLeft:6
    },
    headContainer:{
      flex:1,
      flexDirection:"row"
    },
    headContainerBtn1:{
      flex:1,
      backgroundColor:"#FF865E",
      alignItems: 'center',
      justifyContent:"center",
      marginLeft:10,
      marginRight:5,
      borderRadius:10
    },
    headContainerBtn2:{
      flex:1,
      backgroundColor:"#FFD32A",
      alignItems: "center",
      justifyContent:"center",
      marginRight:10,
      marginLeft:5,
      borderRadius:10
    },
    headText:{
      fontSize:18
    },
    contentContainer:{
      flex:13,
      backgroundColor:"#A2D2FF",
      width:"92%",
      marginTop:10,
      marginBottom:30,
      alignItems: "center"
    },
    contents:{
      width:"92%",
      height:60,
      backgroundColor:"#FEF9EF",
      borderRadius:10,
      marginTop:10
    }
});

export default MainContainer