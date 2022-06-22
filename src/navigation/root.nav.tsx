import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import bottomTab from './bottomtab.nav';

// Screens and stacks

const RootNavigator = createNativeStackNavigator();
const StackConfig = {headerShown: false};

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator.Navigator screenOptions={StackConfig}>
        <RootNavigator.Screen component={bottomTab} name="bottomTab" />
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}
