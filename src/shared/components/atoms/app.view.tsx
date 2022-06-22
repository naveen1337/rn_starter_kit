import React from 'react';
import {ViewProps, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '@colors';
import styles from '../../../constants/constents.styles';
import {themeSelector} from '../../../store/state.app/app.selector';

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
  const theme = useSelector(themeSelector);
  const ss = sgen(props, theme);

  return <View style={[ss.root, props.style]}>{props.children}</View>;
}

function sgen(props: PropTypes, theme: any) {
  let bgColor = theme.bg;
  if (props.type === 1) {
    bgColor = theme.primary;
  }
  if (props.type === 2) {
    bgColor = theme.secondary;
  }

  return StyleSheet.create({
    root: {
      backgroundColor: bgColor,
    },
  });
}
