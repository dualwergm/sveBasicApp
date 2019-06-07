import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import OptionsModal from '../../sections/components/options-modal';
import ds from '../../utils/d-theme';

function ValueListLayout(props){
    return (
        <View style={styles.container}>
            <OptionsModal {...props} >
                <View style={[ds.center]}>
                    <TextInput 
                        style={[styles.comment, ds.mb3]}
                        multiline={true}
                        autoFocus={true}
                        numberOfLines={4}
                        placeholder={'Ingresa un comentario'}
                        underlineColorAndroid={'transparent'}                  
                    />
                    <TouchableOpacity style={ds.pbtn}
                    >
                        <Text style={ds.ptxtbtn} >Comentar</Text>
                    </TouchableOpacity>
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
    comment: {
        width: Dimensions.get('window').width-40, 
        height: 180,
        backgroundColor: '#ffffff',
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    }
});

export default ValueListLayout;