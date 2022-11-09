import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import imgs from '@images';
import {AppView, AppText, BtnPrimary} from '@components';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function NoInternetScreen(props: any) {
  return (
    <View style={[ss.root]}>
      <Text style={[]} />
      <View style={[ss.container]}>
        <AppText size={24} type={3} style={[]}>
          No Internet connection
        </AppText>
        <AppText size={16} style={[ss.txt]}>
          Please check your internet connection and try again
        </AppText>
      </View>
      <TouchableOpacity style={[ss.btn]}>
        <BtnPrimary text={'TRY AGAIN'} />
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: 73,
    height: 71,
  },
  container: {
    alignItems: 'center',
  },
  loading: {
    paddingVertical: 16,
  },
  txt: {
    paddingVertical: 16,
  },
  btn: {
    margin: 16,
  },
});
