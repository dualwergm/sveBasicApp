import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './src/home/containers/home';
import VarList from './src/ind/containers/var-card-list';
import Explore from './src/ind/containers/explore-layout';

const AppNavigator = createStackNavigator(
  {
    Home,
    VarList: {
      screen: VarList,
      navigationOptions: {
        title: 'Mis variables'
      }
    },
    Explore
  }
);

export default createAppContainer(AppNavigator);