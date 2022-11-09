import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';
import colors from '../../../assets/constants/constants-colors';
import styles from '../../../assets/constants/constants-styles'

interface PropTypes extends TextProps {
  size?: number;
  type?: number;
  numberOfLines?: number;
}

export default function AppText(props: PropTypes) {
  const numberOfLines = (props.numberOfLines ??= 0);
  const ss = sgen(props);

  return (
    <Text numberOfLines={numberOfLines} style={[ss.txt, props.style]}>
      {props.children}
    </Text>
  );
}

function sgen(props: PropTypes) {
  let font = styles.fontReg;
  let size = 12;
  if (props.type === 2) {
    font = styles.fontMed;
  }
  if (props.type === 3) {
    font = styles.fontBold;
  }
  if (props.size) {
    size = props.size;
  }
  return StyleSheet.create({
    txt: {
      color: colors.semiblack,
      fontSize: size,
      fontFamily: font,
    },
  });
}
