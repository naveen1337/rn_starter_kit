import colors from '@colors';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewProps,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import styles from '@styles';

interface PropTypes extends ViewProps, ViewProps {
  viewStyle?: ViewStyle;
  inputeStyle?: TextInputProps;
  value: any;
  placeHolder?: string;
  onChangeText(e: any): void;
  multiline?: boolean;
  cCode: any;
  setNumberModal(e: any): void;
  maxLength: number;
}

export default function PhoneNumberInput(props: PropTypes) {
  return (
    <View style={[ss.root, props.viewStyle]}>
      <TouchableOpacity
        onPress={() => props.setNumberModal(true)}
        style={[ss.ccinput]}>
        <Text style={[ss.ccTxt]}>{props.cCode.dial_code}</Text>
      </TouchableOpacity>
      <TextInput
        multiline={props.multiline}
        numberOfLines={props.multiline ? 3 : 1}
        style={[ss.input, props.inputeStyle]}
        keyboardAppearance="light"
        keyboardType="phone-pad"
        maxLength={props.maxLength}
        placeholder={props.placeHolder}
        value={props.value}
        onChangeText={(e: any) => props.onChangeText(e)}
      />
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    borderColor: colors.gray1,
    marginVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontFamily: styles.fontReg,
    padding: 0,
    margin: 0,
    paddingHorizontal: 6,
    flexGrow: 1,
    paddingVertical: 8,
  },
  ccinput: {
    paddingHorizontal: 4,
    borderRightWidth: 1,
    borderColor: colors.gray1,
  },
  ccTxt: {
    fontFamily: styles.fontReg,
    paddingRight: 4,
    paddingVertical: 8,
  },
});
