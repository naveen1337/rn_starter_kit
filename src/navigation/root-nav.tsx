import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Auth} from './stack-nav';
import bottomTab from './bottomtab-nav';

// Screens and stacks

import InitScreen from '../screens/app/init/init';

const RootNavigator = createNativeStackNavigator();
const StackConfig = {headerShown: false};

const linking = {
  prefixes: ['https://streamsoflight.page.link'],
  config: {
    screens: {
      auth_stack: {
        path: 'register/:uid/:at',
      },
      init: '*',
    },
  },
};

export default function RootNavigation() {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator.Navigator
        initialRouteName="init"
        screenOptions={StackConfig}>
        <RootNavigator.Screen component={InitScreen} name="init" />
        <RootNavigator.Screen component={Auth} name="auth_stack" />
        <RootNavigator.Screen component={bottomTab} name="bottomTab" />
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}
