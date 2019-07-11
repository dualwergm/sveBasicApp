import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CardView from 'react-native-cardview';
import ds from '../../utils/d-theme';

function CommentCard(props){
    let description = (props.description.length > 100 && !props.opened) ? `${props.description.substring(0,70)}...` : props.description;
    let cDescription = props.description.length > 100 ?
    <Text onPress={props.expandCard} style={ds.tn1} ref={component=> this._MyComponent=component} >{description}</Text> :
    <Text style={ds.tn1}>{description}</Text>
    return(
        <View style={styles.ccard}
        >
            <CardView
                cardElevation={1}
                cornerRadius={5}
            >
                <View style={styles.cinner}>
                    <View style={styles.ctitle}>
                        <Text style={ds.tn3b}>{props.title}</Text>
                    </View>
                    <View>
                        {cDescription}
                    </View>
                </View>
            </CardView>
        </View>
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
    cvalue: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    }
});

export default CommentCard;