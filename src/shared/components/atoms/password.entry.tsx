import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from 'react-native';
import styles from '../../../assets/constants/constants-styles'
import {EyeClose, EyeOpen} from '@icons';

interface PropTypes extends ViewProps, ViewProps {
  viewStyle?: ViewStyle;
  inputeStyle?: TextInputProps;
  value: any;
  placeHolder?: string;
  onChangeText(e: any): void;
  hidePass: boolean;
  changePassVisible(e: boolean): void;
}

export default function AppPasswordEntry(props: PropTypes) {
  return (
    <View style={[ss.root, props.viewStyle]}>
      <TextInput
        style={[ss.input, props.inputeStyle]}
        placeholder={props.placeHolder}
        value={props.value}
        secureTextEntry={props.hidePass}
        onChangeText={(e: any) => props.onChangeText(e)}
      />

      <TouchableOpacity
        onPress={() => props.changePassVisible(!props.hidePass)}
        style={[ss.showPass]}>
        {props.hidePass ? <EyeClose /> : <EyeOpen />}
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    borderColor: '#4444442E',
    marginVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontFamily: styles.fontReg,
    padding: 0,
    margin: 0,
    paddingHorizontal: 4,
    fontSize: 16,
    flexGrow: 1,
  },
  showPass: {
    paddingHorizontal: 6,
    // backgroundColor: 'red',
  },
});
