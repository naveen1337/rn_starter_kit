import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import imgs from '@images';
import {
  AppText,
  TopVector,
  PassEntry,
  BtnPrimary,
  BlockScreenLoading,
} from '@components';
import shrstyl from '@sharedStyles';
import VerifyEmailModal from './components/verifyEmail.Modal';

interface PropTypes {
  pass: any;
  confirmPass: any;
  setPass(e: any): void;
  setConfirmPass(e: any): void;
  hidePass: boolean;
  hideCPass: boolean;
  setHidePass(e: any): void;
  setHideCPass(e: any): void;
  onPressContinue(): void;
  goBack(): void;
  verifyModal: boolean;
  signup_req: any;
}

export default function NewpasswordScreen(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <ScrollView>
        <TopVector
          title={'Create New Password'}
          subtitle={'Please set you password to create your account'}
        />
        <View style={[ss.container]}>
          <AppText style={[shrstyl.inputLabel]}>Enter Password</AppText>
          <PassEntry
            value={props.pass}
            onChangeText={props.setPass}
            hidePass={props.hidePass}
            changePassVisible={props.setHidePass}
          />
          <AppText style={[shrstyl.inputLabel]}>Confirm Password</AppText>
          <PassEntry
            value={props.confirmPass}
            onChangeText={props.setConfirmPass}
            hidePass={props.hideCPass}
            changePassVisible={props.setHideCPass}
          />
        </View>
        <TouchableOpacity onPress={props.onPressContinue} style={[ss.btn]}>
          <BtnPrimary text={'CREATE ACCOUNT'} />
        </TouchableOpacity>
      </ScrollView>

      <BlockScreenLoading visible={props.signup_req?.isLoading} />
      <VerifyEmailModal goBack={props.goBack} visible={props.verifyModal} />
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
  },
  btn: {
    paddingHorizontal: 30,
    paddingVertical: 4,
  },
});
