import React, {Component} from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import {withNavigation} from 'react-navigation';
import {TabView, SceneMap} from 'react-native-tab-view';
import ExploreResults from '../components/explore-results';
import ExploreValues from '../components/explore-values';

class ExploreLayout extends Component {
    state = {
      index: 0,
      routes: [
        { key: 'results', title: 'Resultados' },
        { key: 'values', title: 'Valores' },
        { key: 'analysis', title: 'Análisis' },
      ],
    };

    static navigationOptions = ({ navigation }) => {
      let item = navigation.getParam('varitem');
      return {
        title: item.name || 'Explorar variable'
      };
    };

    loadResults = () => (
        <ExploreResults />
      );
    loadAnalysis = () => (
        <View style={[styles.scene, { backgroundColor: '#673ab7', justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={{color: 'white'}}>Holaaaa yo seré el análisis</Text>
        </View>
    );
    loadValues = () => (
        <ExploreValues />
    ); 

    render(){
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    results: this.loadResults,
                    values: this.loadValues,
                    analysis: this.loadAnalysis,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
      flex: 1
    },
  });

export default withNavigation(ExploreLayout);