import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomBottomTab} from '@components';
// import {CustomBottomTab} from "../"

// screens
import DashboardScreen from '../screens/user/dashboard.screen';
import MapScreen from '../screens/user/map.screen';
import TasksScreen from '../screens/user/tasks.screen';

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
        name="home_tab"
        options={{tabBarLabel: 'Home'}}
        component={DashboardScreen}
      />
      <BottomTab.Screen
        name="map_tab"
        options={{tabBarLabel: 'Map'}}
        component={MapScreen}
      />
      <BottomTab.Screen
        name="more_tab"
        options={{tabBarLabel: 'Goal'}}
        component={TasksScreen}
      />
    </BottomTab.Navigator>
  );
}
