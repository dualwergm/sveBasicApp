import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation';
import CurrentValueCard from './current-value-card';
import ds from '../../utils/d-theme';
import Btn1 from '../../sections/components/1btn';

function ItemAnalysis(props){
    let item = props.navigation.getParam('varitem');
    return (
        <View style={styles.container}>
            <View style={[ds.mh1, ds.mv1]}>
                <CurrentValueCard {...item} />
            </View>
            <View style={[styles.container, {alignItems: 'center'}]}>
                
                <TextInput 
                    style={[styles.comment, ds.mb3]}
                    multiline={true}
                    autoFocus={true}
                    numberOfLines={4}
                    placeholder={props.placeholder}
                    underlineColorAndroid={'transparent'}                  
                />
                
                <Btn1 onPress={props.fnaddvalue}
                    text={"Guardar"}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    comment: {
        width: Dimensions.get('window').width-40, 
        height: 150,
        backgroundColor: '#ffffff',
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    }
});

export default withNavigation(ItemAnalysis);