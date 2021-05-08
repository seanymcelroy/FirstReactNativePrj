import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
// 
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImage from './app/screens/ViewImage'
import AppText from './app/assets/components/AppText'
import ButtonComponent from './app/assets/components/ButtonComponent'
import Card from './app/assets/components/Card';

export default function App() {
  return (
  // <WelcomeScreen/>
  // <ViewImage/>
  <View style={styles.container}>
    <Card title="Red Jacket" subTitle="$200" image={require("./app/assets/chair.jpg")} />
  </View>
    )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f8f4f4',
    padding: 20,
    paddingTop: 100
  },
})
