import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CardView from 'react-native-cardview';
import {withNavigation} from 'react-navigation';
import PureGraphic from '../containers/pure-graphic';
import ds from '../../utils/d-theme';
import inds from '../../utils/ind-theme';
import State from './state';

function ExploreResults(props) {
    let item = props.navigation.getParam('varitem');
    let tagvalid;
    if(!item.isDate){
        tagvalid = <View style={inds.cvalid}><Text style={[ds.ti1, {color: 'white'}]}>No vigente</Text></View>;
    }
    return (
        <View style={styles.container}>
            <View style={[ds.mh1, ds.mv3]}>
                <CardView
                    cardElevation={2}
                    cornerRadius={5}
                >
                    <View style={styles.cinner}>
                        <View style={styles.cvalue}>
                            <Text style={ds.tn3b}>{item.value}</Text>
                            <Text style={ds.ti1}>{item.date}</Text>
                            <View style={inds.cstate}>
                                <State {...item.state} />
                            </View>   
                        </View>
                        {tagvalid}
                    </View>
                </CardView>
            </View>
            <View style={[ds.mt2, styles.cgraphic]}>
                <View style={[styles.cheader, ds.mb2]}>
                    <View style={{alignItems: 'center', flexDirection:'row'}}>
                        <View style={{backgroundColor: '#7b1fa2', width: 15, height: 15, marginRight: 3}}/>
                        <Text style={ds.tn2}>{item.name}</Text>
                    </View>
                    <View style={{alignItems: 'center', flexDirection:'row'}}>
                        <View style={{backgroundColor: '#e64a19', width: 15, height: 15, marginRight: 3}}/>
                        <Text style={ds.tn2}>Meta</Text>
                    </View>
                </View>
                <PureGraphic />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cvalue: {
        position: 'relative'
    },
    cinner: {
        padding: 10,
    },
    cgraphic: {
        paddingRight: 10
    },
    cheader: {
        paddingLeft: 15,
        paddingRight: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});

export default withNavigation(ExploreResults);