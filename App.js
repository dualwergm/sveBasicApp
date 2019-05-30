import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './src/home/containers/home';
import VarList from './src/ind/containers/var-card-list';

const AppNavigator = createStackNavigator(
  {
    Home,
    VarList: {
      screen: VarList,
      navigationOptions: {
        title: 'Mis variables'
      }
    }
  }
);

export default createAppContainer(AppNavigator);