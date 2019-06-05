import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import OptionsModal from '../../sections/components/options-modal';
import ds from '../../utils/d-theme';

function VarListLayout(props){
    return (
        <View style={styles.container}>
            <OptionsModal {...props} >
                <View style={[ds.center, styles.cbtns]}>
                    <TouchableOpacity style={[ds.pbtn, ds.mb3]}
                        onPress={props.fnexplore}
                    >
                        <Text style={ds.ptxtbtn} >Explorar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ds.pbtn}
                        onPress={props.fnaddvalue}
                    >
                        <Text style={ds.ptxtbtn} >Ingresar valor</Text>
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
    }
});

export default VarListLayout;