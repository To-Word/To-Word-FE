import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Main: undefined,
  Next: undefined;
};

type DetailPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Next'>;

type Props = {
  navigation: DetailPageNavigationProp
}

const Footer = () => {
    return (
    <View style={styles.container}>
      <TouchableOpacity><Text>여기1</Text></TouchableOpacity>
      <TouchableOpacity><Text>여기2</Text></TouchableOpacity>
      <TouchableOpacity><Text>여기3</Text></TouchableOpacity>
      <TouchableOpacity><Text>여기4</Text></TouchableOpacity>
      <TouchableOpacity><Text>여기5</Text></TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      backgroundColor: "white",
    },
    backBtn : {
        flex:1,
        backgroundColor:"white",
    }
});

export default Footer