import React from 'react';
//import Graphic from '../components/graphic';
import {View, StyleSheet, Text} from 'react-native';
import CardView from 'react-native-cardview';
import PureGraphic from '../containers/pure-graphic';

function ExploreResults(props) {
    return (
        <View style={styles.container}>
            <CardView
                cardElevation={1}
                cornerRadius={5}
            >
                <Text>34000</Text>

            </CardView>
            <PureGraphic />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1
    }
});

export default ExploreResults;