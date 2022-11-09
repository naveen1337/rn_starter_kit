import React, { useEffect, useState } from 'react';
import InitScreen from './init-screen';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { getPersistedUserId } from '@utils/localStorage';
import {
  resetTobottomTab,
  resetToAuth,
} from '../../../navigation/links/app.links';
import { getUserInfoRemote } from '@remote/user-remote';
import { errorBox } from '@utils/snakbars';
import { getAllRolesRemote } from '@remote/app-remote';
// import {updateRolesAction} from '@state/app/actions';
import { updateUserInfoAction } from '@state/user/actions';

export default function InitHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const initTasks = async () => {
    // try {
    //   const roles = await getAllRolesRemote();
    //   dispatch(updateRolesAction(roles));
    //   const persistedUser = await getPersistedUserId();
    //   if (persistedUser) {
    //     const userInfo = await getUserInfoRemote({uid: persistedUser});
    //     if (!userInfo) {
    //       errorBox('Please check your internet', 500);
    //       return;
    //     }
    //     dispatch(updateUserInfoAction(userInfo));
    //     resetTobottomTab(navigation);
    //   } else {
    //     resetToAuth(navigation);
    //   }
    // } catch (err) {
    //   console.log(err);
    //   errorBox('Please check your internet', 500);
    // }
  };

  useEffect(() => {
    setTimeout(() => {
      resetToAuth(navigation);
    }, 1000)
    // initTasks();
  }, []);

  return <InitScreen />;
}
