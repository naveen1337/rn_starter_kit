import React, {useCallback, useEffect, useState} from 'react';
import OnboardScreen from './onboard.screen';
import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {infoBox} from '@utils/snakbars';
import {resetToLogin} from '../../../navigation/links/app.links';

export default function OnboardHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (route?.params?.uid) {
        infoBox('Login to contine', 0);
        resetToLogin(navigation);
      }
    }, []),
  );

  function onPressSignin() {
    navigation.navigate('login');
  }
  function onPressSignUp() {
    navigation.navigate('signup');
  }

  return (
    <OnboardScreen
      onPressSignin={onPressSignin}
      onPressSignUp={onPressSignUp}
      loading={loading}
    />
  );
}
