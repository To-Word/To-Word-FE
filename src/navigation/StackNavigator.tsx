import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Main from "../pages/Main";
import Footer from '../pages/Footer';

const Stack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Main: undefined;
  Footer: undefined;
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
          borderBottomColor: "white",
          shadowColor: "white",
        },
        //헤더의 텍스트를 왼쪾에 둘지 가운데에 둘지를 결정
        headerTitleAlign:'left',
        headerTintColor: "#000",
        headerBackTitleVisible: false
      }}
    >
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name="Footer" component={Footer}/>
    </Stack.Navigator>
  )
}

export default StackNavigator

