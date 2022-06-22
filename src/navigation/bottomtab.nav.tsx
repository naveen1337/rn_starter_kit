import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomBottomTab} from '@components';
// import {CustomBottomTab} from "../"

// screens
import Home from '../screens/app/home';

const BottomTab = createBottomTabNavigator();

const config = {
  headerShown: false,
};

export default function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      detachInactiveScreens={true}
      screenOptions={config}
      initialRouteName="Home"
      tabBar={props => <CustomBottomTab {...props} />}>
      <BottomTab.Screen
        name="lobby_tab"
        options={{tabBarLabel: 'Home'}}
        component={Home}
      />
      <BottomTab.Screen
        name="match_tab"
        options={{tabBarLabel: 'Search'}}
        component={Home}
      />
      <BottomTab.Screen
        name="leaderboard_tab"
        options={{tabBarLabel: 'Orders'}}
        component={Home}
      />
      <BottomTab.Screen
        name="more_tab"
        options={{tabBarLabel: 'User'}}
        component={Home}
      />
    </BottomTab.Navigator>
  );
}
