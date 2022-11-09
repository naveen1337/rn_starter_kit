import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {AppView, AppText} from '@components';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  wallet: number;
  sport: number;
  username: number;
}

export default function UserInfoCard(props: PropTypes) {
  return (
    <AppView>
      <AppText style={[]}>HEllo</AppText>
    </AppView>
  );
}

const ss = StyleSheet.create({
  root: {},
});
