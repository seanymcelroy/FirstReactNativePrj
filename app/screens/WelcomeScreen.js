import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
      <ImageBackground 
      style={styles.background}
      source={require('../assets/background.jpg')}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text>Sell What you dont need</Text>
          </View>
          <View style={styles.loginButton}/>
          <View style={styles.registerButton}/>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton:{
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerButton:{
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    },
    logo:{
        width: 100,
        height: 100,
    },
    logoContainer:{
        position: "absolute",
        alignItems:'center',
        top: 70
    }
})

export default WelcomeScreen;