import React from 'react';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';
import {AppView, AppText} from '@components';
import {BgTop} from '@icons';
import imgs from '@imgs';

interface PropTypes {
  title: string;
  subtitle: string;
}

export default function TopVector(props: PropTypes) {
  const {width} = Dimensions.get('window');
  return (
    <View style={[{width: width}]}>
      <BgTop width={width + 1} height={width * (309 / 420) + 2} />
      <View style={[ss.container]}>
        <View style={[ss.imageC]}>
          <Image resizeMode="contain" source={imgs.logo} style={[ss.image]} />
        </View>
        <AppText type={2} style={[ss.title]}>
          {props.title}
        </AppText>
        <AppText style={[ss.subTitle]}>{props.subtitle}</AppText>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingVertical: 16,
    paddingHorizontal: 30,
  },
  imageC: {
    width: 78,
    height: 78,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 64,
    height: 64,
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  subTitle: {
    fontSize: 18,
    marginTop: 6,
    color: 'white',
  },
});
