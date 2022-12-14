import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native';
import Header from '../components/header/Header';
import MainContainer from "../components/mainContain/MainContainer"
import Footer from '../components/footer/Footer';

const Main = () => {
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