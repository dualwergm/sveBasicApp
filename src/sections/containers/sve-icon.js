import React from 'react';
import {StyleSheet, Image, TouchableHighlight} from 'react-native';
import {iconsHome} from '../../utils/icons-path';

function SveIcon(props) {
    return (
        <TouchableHighlight style={styles.container}
            onPress={props.onPress}
        >
            <Image source={iconsHome[props.iconKey]} style={styles.icon} /> 
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: '#04B5EB'
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    }
});

export default SveIcon;