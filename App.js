import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './src/home/containers/home';
import VarList from './src/ind/containers/var-card-list';
import ExploreBTabs from './src/ind/containers/explore-btab';

const AppNavigator = createStackNavigator(
  {
    Home,
    VarList: {
      screen: VarList,
      navigationOptions: {
        title: 'Mis variables'
      }
    },
    ExploreBTabs: {
      screen: ExploreBTabs,
      navigationOptions: ({ navigation }) => {
        const itemSelected = navigation.getParam("varitem");
        return {
            title: itemSelected.name
        }
      }
    }
  }
);

export default createAppContainer(AppNavigator);