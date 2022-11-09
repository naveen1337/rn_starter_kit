import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator as createStackNavigator} from '@react-navigation/native-stack';

const StackConfig = {
  headerShown: false,
  detachPreviousScreen: true,
  //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

// screens import
// Auth
import OnBoardScreen from '../screens/app/onboard.screen';
import LoginScreen from '../screens/app/login/login';
import SignupScreen from '../screens/app/signup.screen';
import NewPasswordScreen from '../screens/app/newpassword.screen';
import {useRoute} from '@react-navigation/core';

const AuthStack = createStackNavigator();

export function Auth() {
  const route = useRoute<any>();

  return (
    <AuthStack.Navigator screenOptions={StackConfig}>
      {/* <AuthStack.Screen
        name="onboard"
        component={OnBoardScreen}
        initialParams={route.params}
      /> */}
      <AuthStack.Screen name="login" component={LoginScreen} />
      {/* <AuthStack.Screen name="signup" component={SignupScreen} /> */}
      {/* <AuthStack.Screen name="newpassword" component={NewPasswordScreen} /> */}
    </AuthStack.Navigator>
  );
}
