import React, {useEffect, useState} from 'react';
import InitScreen from './blueprint.screen';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';

import {} from './bluprint.controller';

export default function BluprintHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return <InitScreen />;
}
