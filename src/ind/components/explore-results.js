import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import PureGraphic from '../containers/pure-graphic';
import ds from '../../utils/d-theme';
import CurrentValueCard from './current-value-card';

function ExploreResults(props) {
    let item = props.navigation.getParam('varitem');
    return (
        <View style={styles.container}>
            <View style={[ds.mh1, ds.mv3]}>
                <CurrentValueCard {...item} />
            </View>
            <View style={[ds.mt2, styles.cgraphic]}>
                <View style={[styles.cheader, ds.mb2]}>
                    <View style={{alignItems: 'center', flexDirection:'row'}}>
                        <View style={{backgroundColor: 'rgb(249, 94, 95)', width: 15, height: 15, marginRight: 3}}/>
                        <Text style={ds.tn2}>{item.name}</Text>
                    </View>
                    <View style={{alignItems: 'center', flexDirection:'row'}}>
                        <View style={{backgroundColor: 'rgb(241, 143, 2)', width: 15, height: 15, marginRight: 3}}/>
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