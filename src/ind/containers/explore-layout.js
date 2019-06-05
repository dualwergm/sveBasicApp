import React, {Component} from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import ExploreResults from './explore-results';
const loadResults = () => (
    <View 
        style={[styles.scene, { backgroundColor: '#ff4081' }]} >
        <ExploreResults />
    </View>
  );
  const loadAnalysis = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7', justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{color: 'white'}}>Holaaaa yo seré el análisis</Text>
    </View>
  );

class ExploreLayout extends Component {
    state = {
        index: 0,
        routes: [
          { key: 'results', title: 'Resultados' },
          { key: 'analysis', title: 'Análisis' },
        ],
      };

    render(){
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    results: loadResults,
                    analysis: loadAnalysis,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });

export default ExploreLayout;