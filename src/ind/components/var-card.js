import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview';
import State from './state';
import ds from '../../utils/d-theme';

function VarCard(props){
    let tagvalid;
    if(!props.isDate){
        tagvalid = <View style={styles.cvalid}><Text style={[ds.ti1, {color: 'white'}]}>No vigente</Text></View>;
    }
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
                        <Text style={styles.title}>{props.name}</Text>
                        <View style={styles.cstate}>
                            <State 
                                {...props.state}
                            />
                        </View>                        
                    </View>
                    <View style={styles.cvalue}>
                        <Text style={styles.value}>{props.value}</Text>
                        <Text style={ds.ti1}>{props.date}</Text>
                    </View>
                    <View style={styles.cvalue}>
                        <Text style={ds.ti1}>{props.unit}</Text>
                        <Text style={ds.ti1}>{props.timer}</Text>
                    </View>
                    {tagvalid}
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
        borderBottomColor: '#eaeaea',
        marginVertical: 3
    },
    cstate: {
        right: 0,
        top: 0,
        position: 'absolute'
    },
    cvalue: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    value: {
        fontSize: 18
    },
    cvalid: {
        borderRadius: 4,
        padding: 2,
        backgroundColor: '#5769e7',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

export default VarCard;