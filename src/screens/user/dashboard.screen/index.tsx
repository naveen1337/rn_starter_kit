import React, {useEffect, useState} from 'react';
import DashboardScreen from './dashboard.screen';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '@state/user/selector';

export default function DashboardHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userInfo = useSelector(userSelector);


  return <DashboardScreen />;
}
