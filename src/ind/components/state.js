import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {iconsState} from '../../utils/icons-path';

function State(props){
    let imgTab;
    if(props.icon){
        imgTab =   <Image source={iconsState[props.icon]} 
                style={[styles.icon, {
                        transform: [ { rotate: props.icon === '2' ? '90deg' : props.icon === '3' ? '180deg' : '0deg' }]
                    }]} 
            /> 
    }

    return (
        <View style={[styles.container, {backgroundColor: props.color || '#5e5e5e'}]}>
            {imgTab}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 30,
        height: 30
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    }
});

export default State;