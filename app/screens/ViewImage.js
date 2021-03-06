import React from 'react';
import { View, ImageBackground, StyleSheet, Image} from 'react-native';
// Seperate our code
import colors from '../config/colors'

function ViewImage(props) {
    return (
        <View style={styles.viewImgBG}>
            <View style={styles.topBTNs}>
                <View style={styles.closeBTN}/>
                <View style={styles.delBTN}/>    
            </View>
            <Image style={styles.itemPic} source={require('../assets/chair.jpg')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    viewImgBG:{
        flex: 1,
        backgroundColor: 'black'
    },
    topBTNs:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    closeBTN:{
        backgroundColor: colors.primary,
        width: 50,
        height: 50,
        left: 20,
        top: 20
    },
    delBTN:{
        backgroundColor: colors.secondary,
        width: 50,
        height: 50,
        top: 20,
        right: 20
        
    },
    itemPic:{
        width: '100%',
        height: 550,
        top: 120,
        position: 'absolute'
    }


})

export default ViewImage;