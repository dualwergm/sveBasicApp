import React, {Component} from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import {withNavigation} from 'react-navigation';
import {TabView, SceneMap} from 'react-native-tab-view';
import ExploreCommentsLayout from './explore-comments-layout';
import ItemAnalysis from '../components/item-analysis';

class AnalysisLayout extends Component {
    state = {
      index: 0,
      routes: [
        { key: 'comments', title: 'Comen...' },
        { key: 'causes', title: 'Causas' },
        { key: 'effects', title: 'Efectos' },
        { key: 'solutions', title: 'Soluc...' },
      ],
    };

    loadComments = () => (
      <ExploreCommentsLayout />  
    );

    loadCauses = () => (
      <ItemAnalysis placeholder={"Ingrese las causas"}/>
    );
    loadEffects = () => (
      <ItemAnalysis placeholder={"Ingrese los efectos"}/>
    ); 
    loadSolutions = () => (
      <ItemAnalysis placeholder={"Ingrese las soluciones"}/>
    ); 
    render(){
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                  comments: this.loadComments,
                  causes: this.loadCauses,
                  effects: this.loadEffects,
                  solutions: this.loadSolutions,
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

export default withNavigation(AnalysisLayout);