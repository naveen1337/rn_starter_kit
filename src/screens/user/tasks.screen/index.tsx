import React, {useEffect, useState} from 'react';
import TasksScreen from './tasks.screen';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';

export default function TasksHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return <TasksScreen />;
}
