import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {AppView, AppText} from '@components';
import Colors from '@colors';

interface PropTypes {
  onPress(): void;
}

export default function ForgotPasswordLink(props: PropTypes) {
  return (
    <TouchableOpacity style={{}} onPress={props.onPress}>
      <AppText style={[ss.txt]}>Forgot Password</AppText>
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  txt: {
    color: Colors.blue3,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
});
