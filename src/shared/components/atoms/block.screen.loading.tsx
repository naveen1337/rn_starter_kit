/**
 * loading modal with full screen blocking, used lot of places
 */

import React from 'react';
import {View, Modal, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {AppText} from '@components';
import colors from '../../../assets/constants/constants-colors';
import styles from '../../../assets/constants/constants-styles'

interface PropTypes {
  visible: boolean;
  text?: string;
}

export default function BlockScreenLoading(props: PropTypes) {
  if (!props.visible) {
    return null;
  }
  return (
    <Modal visible={true} transparent={true}>
      <View style={[ss.root, StyleSheet.absoluteFill]}>
        <View style={[ss.container]}>
          <ActivityIndicator size="large" color={'#143258'} />
          <AppText size={12} type={1} style={[ss.txt]}>
            Please Wait...
          </AppText>
        </View>
      </View>
    </Modal>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    padding: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    backgroundColor: colors.white,
  },
  txt: {
    paddingHorizontal: 16,
    color: colors.black,
    textAlign: 'center',
    fontSize: 14,
  },
});
