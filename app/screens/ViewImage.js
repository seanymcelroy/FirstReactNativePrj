import React from 'react';
import { View, ImageBackground, StyleSheet, Image} from 'react-native';

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
        backgroundColor: '#fc5c65',
        width: 50,
        height: 50,
        left: 20,
        top: 20
    },
    delBTN:{
        backgroundColor: '#4ecdc4',
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