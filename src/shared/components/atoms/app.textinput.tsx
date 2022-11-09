import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import colors from '../../../assets/constants/constants-colors';
import styles from '../../../assets/constants/constants-styles'

interface PropTypes extends ViewProps, ViewProps {
  viewStyle?: ViewStyle;
  inputeStyle?: TextInputProps;
  value: any;
  placeHolder?: string;
  onChangeText(e: any): void;
  multiline?: boolean;
}

export default function AppTextInput(props: PropTypes) {
  return (
    <View style={[ss.root, props.viewStyle]}>
      <TextInput
        multiline={props.multiline}
        numberOfLines={props.multiline ? 3 : 1}
        style={[ss.input, props.inputeStyle]}
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
    padding: 8,
  },
  input: {
    fontFamily: styles.fontReg,
    padding: 0,
    margin: 0,
    paddingHorizontal: 4,
  },
});
