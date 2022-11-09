import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import colors from '../../../assets/constants/constants-colors';
import styles from '../../../assets/constants/constants-styles'

interface PropTypes {
  text: string;
  ViewStyle?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
}

export default function ButtonPrimary(props: PropTypes) {
  return (
    <View style={[ss.root, props.ViewStyle]}>
      <Text style={[ss.txt, props.textStyle]}>{props.text}</Text>
      {props.loading && (
        <ActivityIndicator style={[ss.loadstyle]} size="small" color="blue" />
      )}
    </View>
  );
}

const ss = StyleSheet.create({  
  root: {
    backgroundColor: styles.colors.secondary,
    paddingVertical: 14,
    borderRadius: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 14,
    color: colors.blue3,
    fontFamily: styles.fontBold,
    textAlign: 'center',
  },
  loadstyle: {
    paddingHorizontal: 6,
  },
});
