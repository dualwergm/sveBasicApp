import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import ExploreResults from '../components/explore-results';
import ExploreValues from '../components/explore-values';

class HomeScreen extends React.Component {
  render() {
    return (
      <ExploreResults />
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <ExploreValues />
    );
  }
}

class AnalysisScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Análisis</Text>
      </View>
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
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
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
      results: { screen: HomeScreen,
        navigationOptions: {
          title: 'Resultados'
        }
      },
      values: { screen: SettingsScreen,
        navigationOptions: {
          title: 'Valores'
        }
      },
      analysis: { screen: AnalysisScreen,
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
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  )
);

export default ExploreBTabs;