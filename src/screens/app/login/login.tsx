import React, {useState} from 'react';
import LoginScreen from './login.screen';
import {useMutation} from 'react-query';
import {loginRemote} from '../../../remote/app-remote';
import {errorBox} from '../../../shared/utils/snakbars';
import {useDispatch} from 'react-redux';
import {updateAuthTokenAction, updateUserInfoAction} from '@state/user/actions';
import {persistUserId} from '@utils/localStorage';
import {resetTobottomTab} from '../../../navigation/links/app.links';
import {useNavigation} from '@react-navigation/core';

export default function LoginHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [email, setEmail] = useState('chintutudu2@gmail.com');
  const [password, setPassword] = useState('chintu12');
  const [hidePass, setHidePass] = useState(true);

  const loginReq = useMutation(loginRemote, {
    onSuccess: async (data, vars, ctx) => {
      if (!data) {
        errorBox('Failed to signin', 200);
        return;
      }
      // await persistUserId(data.userInfo.id);
      // dispatch(updateAuthTokenAction(data.token));
      // dispatch(updateUserInfoAction(data.userInfo));
      resetTobottomTab(navigation);
      return;
    },
    onError: err => {
      errorBox('Invalid User credentials', 200);
      console.info(err);
      return;
    },
  });

  function onPressLogin() {
    // TODO: Validation
    loginReq.mutate({
      email,
      password,
    });
  }

  return (
    <LoginScreen
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      forgotPassword={()=>{}}
      hidePass={hidePass}
      setHidePass={setHidePass}
      loginReq={loginReq}
      onPressLogin={onPressLogin}
    />
  );
}
