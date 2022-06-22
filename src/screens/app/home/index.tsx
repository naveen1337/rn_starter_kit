import React, {useEffect, useState} from 'react';
import HomeScreen from './home-screen';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';

export default function HomeHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return <HomeScreen />;
}
