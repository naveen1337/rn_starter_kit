import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import imgs from '../../assets/img.manifest';
import {AppView, AppText} from '@components';

export default function BluePrintScreen(props: any) {
  return (
    <AppView type={1} style={[ss.root]}>
      <AppText>Hello</AppText>
    </AppView>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
});
