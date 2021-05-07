import React from 'react';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../../config/colors'
function ButtonComponent({btnText, onPress}) {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={styles.text}>
                {btnText}
                </Text>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btn:{
        backgroundColor:colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%'
    },
    text:{
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase'
    }
})

export default ButtonComponent;