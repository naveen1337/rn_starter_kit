import React from 'react';
import {View, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native';
import styles from '@styles';
import colors from '@colors';

interface PropTypes {
  text: string;
  ViewStyle?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
}

export default function OutlineBTN(props: PropTypes) {
  return (
    <View style={[ss.root, props.ViewStyle]}>
      <Text style={[ss.txt, props.textStyle]}>{props.text}</Text>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    borderColor: styles.colors.secondary,
    borderWidth: 2,
    paddingVertical: 14,
    borderRadius: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 14,
    color: colors.yellow,
    fontFamily: styles.fontBold,
    textAlign: 'center',
  },
  loadstyle: {
    paddingHorizontal: 6,
  },
});
