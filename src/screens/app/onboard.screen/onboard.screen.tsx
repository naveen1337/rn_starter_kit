import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import imgs from '@images';
import {AppView, BtnPrimary, BlockScreenLoading, AppText} from '@components';
import {BgWT, GetSP} from '@icons';
import colors from '@colors';
import OutlineBTN from './components/outline.btn';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default function OnboardScreen(props: any) {
  return (
    <View style={[ss.root]}>
      <View style={[ss.vector]}>
        <BgWT height={HEIGHT * 0.55} />
        <View style={[ss.personC]}>
          <GetSP />
          <AppText size={32} type={3} style={[ss.txt]}>
            Let's Get Started
          </AppText>
        </View>
      </View>
      <View style={[ss.container]}>
        <AppText type={2} size={20} style={[ss.content]}>
          Let's stay connected together to provide standard and reliable book
          dispatch service
        </AppText>
        <View>
          <TouchableOpacity onPress={props.onPressSignUp} style={[ss.btn]}>
            <BtnPrimary text={'SIGN UP'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onPressSignin} style={[ss.btn]}>
            <OutlineBTN text={'SIGN IN'} />
          </TouchableOpacity>
        </View>
      </View>
      <BlockScreenLoading visible={props.loading} />
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: colors.white,
    flex: 1,
  },
  vector: {
    height: HEIGHT * 0.5,
  },
  personC: {
    position: 'absolute',
    alignItems: 'center',
    right: 20,
    top: 20,
    // width: 200,
  },
  container: {
    height: HEIGHT * 0.5,
    // backgroundColor: 'red',
    justifyContent: 'space-around',
  },
  txt: {
    color: colors.white,
    position: 'absolute',
    top: HEIGHT * 0.4,
    // right: 60,
    right: 55,
  },
  content: {
    top: 60,
    lineHeight: 32,
    textAlign: 'center',
  },
  btn: {
    marginHorizontal: 36,
    marginVertical: 12,
  },
});
