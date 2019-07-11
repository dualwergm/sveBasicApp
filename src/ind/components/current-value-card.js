import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CardView from 'react-native-cardview';
import ds from '../../utils/d-theme';
import inds from '../../utils/ind-theme';
import State from './state';

function CurrentValueCard(props){
    let tagvalid;
    if(!props.isDate){
        tagvalid = <View style={inds.cvalid}><Text style={[ds.ti1, {color: 'white'}]}>No vigente</Text></View>;
    }
    return (
        <CardView
                cardElevation={2}
                cornerRadius={5}
            >
                <View style={styles.cinner}>
                    <View style={styles.cvalue}>
                        <Text style={ds.tn3b}>{props.value}</Text>
                        <Text style={ds.ti1}>{props.date}</Text>
                        <View style={inds.cstate}>
                            <State {...props.state} />
                        </View>   
                    </View>
                    {tagvalid}
                </View>
            </CardView>
    );
}

const styles = StyleSheet.create({
    cvalue: {
        position: 'relative'
    },
    cinner: {
        padding: 10,
    }
});

export default CurrentValueCard;