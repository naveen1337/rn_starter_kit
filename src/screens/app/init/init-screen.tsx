import React from 'react';
import { StyleSheet, Image, ActivityIndicator } from 'react-native';
import imgs from '@imgs';
import LinearGradient from 'react-native-linear-gradient';

export default function InitScreen() {
  return (
    <LinearGradient colors={['#153258', '#16509B']} style={ss.root}>
      <Image resizeMode="contain" source={imgs.logo} style={[ss.img]} />
      <ActivityIndicator style={[ss.loading]} size="large" color="#FFFFFF" />
    </LinearGradient>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 73,
    height: 71,
  },
  loading: {
    paddingVertical: 16,
  },
});
