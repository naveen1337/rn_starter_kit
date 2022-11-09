import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import {HamBurger} from '@icons';
import image from '@imgs';
import colors from '../../../assets/constants/constants-colors';
import styles from '../../../assets/constants/constants-styles'

interface PropTypes {}

const WIDTH = Dimensions.get('window').width;

export default function LogoTopBar(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <HamBurger />
      <View style={[ss.imgC]}>
        <View style={[ss.imgWrapper]}>
          <Image resizeMode="contain" source={image.logo} style={[ss.image]} />
        </View>
      </View>
      <Text style={[]} />
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: colors.blue2,
  },
  imgC: {
    borderWidth: 4,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 16,
    left: WIDTH / 2 - 32,
  },
  imgWrapper: {
    borderColor: colors.blue2,
    borderWidth: 4,
    backgroundColor: '#FFFFFF',
    padding: 4,
    borderRadius: 40,
  },
  image: {
    width: 65,
    height: 65,
    alignItems: 'center',
  },
});
