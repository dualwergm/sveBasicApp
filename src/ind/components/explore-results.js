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
            <View style={ds.mt2}>
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
});

export default withNavigation(ExploreResults);