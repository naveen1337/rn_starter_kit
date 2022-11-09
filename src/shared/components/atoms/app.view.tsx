import React from 'react';
import { ViewProps, View, StyleSheet } from 'react-native';

import colors from '../../../assets/constants/constants-colors';
import styles from '../../../assets/constants/constants-styles'

interface PropTypes extends ViewProps {
  /**
   *
   * 1 => primary color
   * 2 => secondary color
   * undefined => theme bg color  */
  //  any colors can be overiden by passing styles in props
  type?: number;
}

export default function AppView(props: PropTypes) {
  return <View style={[ss.root, props.style]}>{props.children}</View>;
}

const ss = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
  },
});
