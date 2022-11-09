import React from 'react';
import {View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  TopVector,
  AppTextInput,
  AppText,
  BtnPrimary,
  PassEntry,
  BlockScreenLoading,
} from '@components';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface PropTypes {
  email: any;
  password: any;
  hidePass: boolean;
  loginReq: any;
  setEmail(e: any): void;
  setPassword(e: any): void;
  setHidePass(e: boolean): void;
  forgotPassword(): void;
  onPressLogin(): void;
}

export default function LoginScreen(props: PropTypes) {
  return (
    <KeyboardAwareScrollView>
      <TopVector
        title={'Sign in'}
        subtitle={'Welcome back! Please sign in to your account'}
      />
      <View style={[ss.container]}>
        <AppText>Username</AppText>
        <AppTextInput
          value={props.email}
          onChangeText={props.setEmail}
          placeHolder="Enter your username"
          viewStyle={ss.binSpace}
        />
        <AppText>Password</AppText>
        <PassEntry
          value={props.password}
          onChangeText={props.setPassword}
          placeHolder="Enter your password"
          hidePass={props.hidePass}
          changePassVisible={props.setHidePass}
        />

        {/* <ForgotPasswordLink onPress={props.forgotPassword} /> */}

        <TouchableOpacity onPress={props.onPressLogin} style={[ss.btn]}>
          <BtnPrimary text={'SIGN IN'} loading={props.loginReq.isLoading} />
        </TouchableOpacity>
      </View>
      <BlockScreenLoading visible={props.loginReq.isLoading} />
    </KeyboardAwareScrollView>
  );
}

const ss = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  binSpace: {
    marginBottom: 26,
  },
  btn: {
    marginVertical: 30,
  },
});
