import React, {useEffect, useState} from 'react';
import MapScreen from './map.screen';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';

export default function MapHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return <MapScreen />;
}
