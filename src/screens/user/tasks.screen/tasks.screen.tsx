import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppView, AppText} from '@components';

export default function TasksScreen(props: any) {
  return (
    <AppView type={0} style={[ss.root]}>
      <AppText>Tasks</AppText>
    </AppView>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
});
