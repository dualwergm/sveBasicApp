import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OptionsModal from '../../sections/components/options-modal';

function VarListLayout(props){
    return (
        <View style={styles.container}>
            <OptionsModal
                {...props}
            >
                <View style={styles.cbuttons}>
                    <View style={styles.opbutton}>
                        <Text style={{color: 'white'}} >Holaaaaa</Text>
                    </View>
                </View>
            </OptionsModal>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cbuttons: {
        flex: 1
    },
    opbutton: {
        width: 200,
        height: 50,
        backgroundColor: 'blue'    
    }
});

export default VarListLayout;