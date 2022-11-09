import React, {useEffect, useState} from 'react';
import NoInternetScreen from './no.internet.screen';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';


export default function NoIntenetHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const initTasks = async () => {};

  useEffect(() => {
    initTasks();
  }, []);

  return <NoInternetScreen />;
}
