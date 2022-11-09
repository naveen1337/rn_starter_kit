import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import imgs from '@images';
import {AppText, TopVector, AppTextInput, BtnPrimary} from '@components';
import shrstyl from '@sharedStyles';
import PhoneNumberInput from './components/phone.number.input';

import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import CountryList from './components/list.countrycode';

interface PropTypes {
  fname: any;
  lname: any;
  email: any;
  ccode: any;
  number: any;
  numberModal: boolean;
  setFname(e: any): void;
  setLname(e: any): void;
  setEmail(e: any): void;
  setCCode(e: any): void;
  setNumber(e: any): void;
  setNumberModal(e: any): void;
  onPressContinue(): void;
}

export default function SignupScreen(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <KeyboardAwareFlatList
        keyboardShouldPersistTaps="handled"
        data={[1]}
        renderItem={() => {
          return (
            <>
              <TopVector
                title={'Sign up'}
                subtitle={'Create an account to spread books with us'}
              />
              <View style={[ss.container]}>
                <AppText style={[shrstyl.inputLabel]}>First Name</AppText>
                <AppTextInput
                  value={props.fname}
                  onChangeText={props.setFname}
                  placeHolder="john kennady"
                  viewStyle={ss.binSpace}
                />
                <AppText style={[shrstyl.inputLabel]}>Last Name</AppText>
                <AppTextInput
                  value={props.lname}
                  onChangeText={props.setLname}
                  placeHolder="royce"
                  viewStyle={ss.binSpace}
                />
                <AppText style={[shrstyl.inputLabel]}>Email ID</AppText>
                <AppTextInput
                  value={props.email}
                  onChangeText={props.setEmail}
                  placeHolder="royce"
                  viewStyle={ss.binSpace}
                />
                <AppText style={[shrstyl.inputLabel]}>Phone number</AppText>
                <PhoneNumberInput
                  value={props.number}
                  onChangeText={props.setNumber}
                  placeHolder="0000000000"
                  viewStyle={ss.binSpace}
                  cCode={props.ccode}
                  setNumberModal={props.setNumberModal}
                  maxLength={props.ccode.Length}
                  // maxLength={13}
                />

                <TouchableOpacity
                  onPress={props.onPressContinue}
                  style={[ss.btn]}>
                  <BtnPrimary text={'CONTINUE'} />
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      />
      <CountryList
        visible={props.numberModal}
        setNumberModal={props.setNumberModal}
        setCCode={props.setCCode}
      />
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
  container: {
    paddingHorizontal: 30,
  },
  binSpace: {
    marginBottom: 26,
  },
  btn: {
    marginVertical: 10,
  },
});
