import {updateAuthToken, updateUserInfo} from './index';

export function updateAuthTokenAction(payload: any) {
  return (dispatch: any) => {
    dispatch(updateAuthToken(payload));
  };
}

export function updateUserInfoAction(payload: any) {
  return (dispatch: any) => {
    dispatch(updateUserInfo(payload));
  };
}
