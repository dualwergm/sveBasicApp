import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import OptionsModal from '../../sections/components/options-modal';
import ds from '../../utils/d-theme';
import Btn1 from '../../sections/components/1btn';

function VarListLayout(props){
    return (
        <View style={styles.container}>
            <OptionsModal {...props} >
                <View style={[ds.center, styles.cbtns]}>
                    <Btn1 onPress={props.fnexplore}
                        text={"Explorar"}
                    />
                    <Btn1 onPress={props.fnaddvalue}
                        text={"Ingresar valor"}
                    />
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