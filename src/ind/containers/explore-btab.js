import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import ExploreResults from '../components/explore-results';
import ExploreValues from '../components/explore-values';
import AnalysisLayout from './explore-analysis-layout';

class ResultsTab extends React.Component {
  render() {
    return (
      <ExploreResults />
    );
  }
}

class ValuesTab extends React.Component {
  render() {
    return (
      <ExploreValues />
    );
  }
}

class AnalysisTab extends React.Component {
  render() {
    return (
      <AnalysisLayout />
    );
  }
}

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'results') {
    iconName = `ios-stats`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  }else if (routeName === 'values') {
    iconName = `md-grid`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'analysis') {
    iconName = `md-eye`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const ExploreBTabs = createAppContainer(
  createBottomTabNavigator(
    {
      results: { screen: ResultsTab,
        navigationOptions: {
          title: 'Resultados'
        }
      },
      values: { screen: ValuesTab,
        navigationOptions: {
          title: 'Valores'
        }
      },
      analysis: { screen: AnalysisTab,
        navigationOptions: {
          title: 'Análisis'
        }
      },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#04B5EB',
        inactiveTintColor: 'gray',
      },
    }
  )
);

export default ExploreBTabs;