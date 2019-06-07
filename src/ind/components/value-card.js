import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview';
import State from './state';
import ds from '../../utils/d-theme';
import inds from '../../utils/ind-theme';

function VarCard(props){
    return (
        <TouchableOpacity style={styles.ccard} 
            onPress={props.onPress}
        >
            <CardView
                cardElevation={1}
                cornerRadius={5}
            >
                <View style={styles.cinner}>
                    <View style={styles.ctitle}>
                        <Text style={ds.tn3b}>{props.date}</Text>
                        <View style={inds.cstate}>
                            <State 
                                {...props.state}
                            />
                        </View>                        
                    </View>
                    <View style={styles.cvalue}>
                        <Text style={ds.tn3}>{props.value}</Text>
                        <View style={{flexDirection: 'row'}} >
                            <Text style={[ds.tn1, ds.bold, ds.mr1]}>Meta:</Text>
                            <Text style={ds.tn1}>{props.target}</Text>
                        </View>
                    </View>
                </View>
            </CardView>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    ccard: {
        marginHorizontal: 10,
        marginTop: 15
    },
    cinner: {
        padding: 10,
        flex: 1
    },
    ctitle: {
        position: 'relative',
        marginVertical: 3
    },
    cvalue: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    }
});

export default VarCard;