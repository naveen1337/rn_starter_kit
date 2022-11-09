import {createSelector} from '@reduxjs/toolkit';

const UserInfoState = (state: any) => state.user.userInfo;

export const userSelector = createSelector([UserInfoState], userInfo => {
  return userInfo;
});
