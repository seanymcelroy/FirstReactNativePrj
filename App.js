import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
// 
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImage from './app/screens/ViewImage'
import AppText from './app/assets/components/AppText'
import ButtonComponent from './app/assets/components/ButtonComponent'


export default function App() {
  return (
  // <WelcomeScreen/>
  // <ViewImage/>
    <View style={styles.container}>
      <AppText>I love React Native</AppText>
      <MaterialCommunityIcons name="email" size={60}/>
      <ButtonComponent btnText="Login" onPress={()=> console.log("button pressed")}/>
    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
