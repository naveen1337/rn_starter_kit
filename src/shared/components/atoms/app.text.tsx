import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../../../constants/constants.colors';
import styles from '../../../constants/constents.styles';
import {themeSelector} from '../../../store/state.app/app.selector';

interface PropTypes extends TextProps {
  size?: number;
  type?: number;
}

export default function AppText(props: PropTypes) {
  const theme = useSelector(themeSelector);
  const numberOfLines = (props.numberOfLines ??= 0);
  const ss = sgen(props, theme.darkTheme);

  return (
    <Text numberOfLines={numberOfLines} style={[ss.textfont, props.style]}>
      {props.children}
    </Text>
  );
}

function sgen(props: PropTypes, darkTheme: boolean) {
  let color = colors.white;
  let family = styles.fontReg;
  let size = 12;
  if (darkTheme) {
    color = colors.white;
  }
  if (props.type === 2) {
    family = styles.fontBold;
  }
  if (props.size) {
    size = props.size;
  }

  return StyleSheet.create({
    textfont: {
      fontFamily: family,
      fontSize: size,
      color: color,
    },
  });
}
