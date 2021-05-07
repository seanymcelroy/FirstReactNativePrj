import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';
// 
import colors from '../config/colors'
import ButtonComponent from '../assets/components/ButtonComponent'
function WelcomeScreen(props) {
    return (
      <ImageBackground 
      blurRadius={3}
      style={styles.background}
      source={require('../assets/background.jpg')}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text style={styles.tagline}>Sell What you dont need</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonComponent btnText="Login"/>
            <ButtonComponent btnText="Register" color="secondary"/>
          </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logo:{
        width: 100,
        height: 100,
    },
    logoContainer:{
        position: "absolute",
        alignItems:'center',
        top: 70
    },
    buttonsContainer:{
        width: '100%',
        padding: 5
    },
    tagline:{
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }
})

export default WelcomeScreen;