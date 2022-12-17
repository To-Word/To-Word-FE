import React from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import Header from '../components/header/Header';
import MainContainer from "../components/mainContain/MainContainer"
import Footer from './Footer';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Main: undefined,
  Next: undefined;
};

type DetailPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Next'>;

type Props = {
  navigation: DetailPageNavigationProp
}

const Main = ({navigation}:Props) => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <MainContainer></MainContainer>
      <Footer></Footer>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  
});

export default Main