import React, {useEffect, useState} from 'react';
import NewpasswordScreen from './newpassword.screen';
import {StackActions, useNavigation, useRoute} from '@react-navigation/core';
import {
  resetTobottomTab,
  resetToAuth,
} from '../../../navigation/links/app.links';
import {useMutation} from 'react-query';
import {signupUserRemote} from '@remote/app.remote';
import {errorBox} from '@utils/snakbars';

export default function NewPasswordHOC() {
  const navigation = useNavigation();
  const route = useRoute<any>();

  // states
  const [pass, setPass] = useState('123456a');
  const [confirmPass, setConfirmPass] = useState('123456a');
  const [hidePass, setHidePass] = useState(true);
  const [hideCPass, setHideCPass] = useState(true);
  const [verifyModal, setVerfifyModal] = useState(false);

  const signup_req = useMutation(signupUserRemote, {
    onSuccess: (data, vars, ctx) => {
      if (!data.txn) {
        errorBox(data.msg, 500);
        return;
      }
      setVerfifyModal(true);
    },
    onError: err => {
      errorBox('Something went wrong', 300);
      console.log(err);
    },
  });

  const onPressContinue = async () => {
    const i_pass = pass.replace(/ /g, '');
    if (i_pass.length < 6) {
      errorBox('Password should be min 6 characters', 0);
    }
    if (!/\d/.test(i_pass)) {
      errorBox('Password should contain 1 number', 0);
      return;
    }
    if (!/[A-Za-z]/.test(i_pass)) {
      errorBox('Password should contain 1 alphabet', 0);
      return;
    }
    if (pass !== confirmPass) {
      errorBox('Password did not match', 0);
      return;
    }
    signup_req.mutate({
      ...route.params.user,
      password: pass,
    });
  };

  function goBack() {
    setVerfifyModal(false);
    navigation.dispatch(StackActions.popToTop());
  }

  return (
    <NewpasswordScreen
      pass={pass}
      confirmPass={confirmPass}
      setPass={setPass}
      setConfirmPass={setConfirmPass}
      hidePass={hidePass}
      setHidePass={setHidePass}
      hideCPass={hideCPass}
      setHideCPass={setHideCPass}
      onPressContinue={onPressContinue}
      verifyModal={verifyModal}
      signup_req={signup_req}
      goBack={goBack}
    />
  );
}
