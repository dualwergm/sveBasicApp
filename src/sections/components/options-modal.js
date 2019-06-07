import React from 'react';
import {View, Text, StyleSheet, Button, Modal, Image, TouchableOpacity} from 'react-native';

function OptionsModal(props){
    return (
        <View style={styles.cmodal}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={props.toggleModal}
            >
                <View style={[styles.cmodal, { backgroundColor: 'rgba(0, 0, 0, 0.8)'}]}>
                    <TouchableOpacity style={styles.cclose}
                        onPress={props.toggleModal}
                        hitSlop={{ left: 5, top:5, bottom:5, right: 5 }}
                    >
                        <Image source={require('../../../assets/close.png')} />
                    </TouchableOpacity>
                    {props.children}
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    cmodal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        position: 'relative'
    },
    cclose: {
        right: 25,
        top: 25,
        position: 'absolute'
    }
});

export default OptionsModal;