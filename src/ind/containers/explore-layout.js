import React, {Component} from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import ExploreResults from '../components/explore-results';
const loadResults = () => (
    <ExploreResults />
  );
  const loadAnalysis = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7', justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{color: 'white'}}>Holaaaa yo seré el análisis</Text>
    </View>
  );
  const loadValues = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7', justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{color: 'white'}}>Holaaaa yo seré la tabla de valores</Text>
    </View>
  ); 

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
      return {
        title: navigation.getParam('name', 'Explorar variable')
      };
    };

    render(){
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    results: loadResults,
                    values: loadValues,
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
      flex: 1
    },
  });

export default ExploreLayout;