import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppView, AppText, LogoTopBar} from '@components';

export default function DashboardScreen(props: any) {
  return (
    <AppView type={0} style={[ss.root]}>
      <LogoTopBar />
      <AppText>Dashboard</AppText>
    </AppView>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
});
