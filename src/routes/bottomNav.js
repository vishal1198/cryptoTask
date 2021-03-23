import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Prices from '../pages/prices/prices';
import NoData from '../pages/noData/noData';
const Tab = createBottomTabNavigator();
export default function bottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Prices"
        component={Prices}
        options={{
          tabBarLabel: 'Prices',
          tabBarIcon: ({color, size}) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={NoData}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color, size}) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={NoData}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="chart-bar"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NoData}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({color, size}) => (
            <Icon name="rss" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Invest"
        component={NoData}
        options={{
          tabBarLabel: 'Invest',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="chart-areaspline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
