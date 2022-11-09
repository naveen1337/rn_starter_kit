/**
 * loading modal with full screen blocking, used lot of places
 */

import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import colors from '@colors';
import {AppText, BtnPrimary} from '@components';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  visible: boolean;
  goBack(): void;
}

export default function VerifyEmailModal(props: PropTypes) {
  if (!props.visible) {
    return null;
  }
  return (
    <Modal visible={true} transparent={true}>
      <View style={[ss.root, StyleSheet.absoluteFill]}>
        <View style={[ss.container]}>
          <Icon name="checkmark-circle-outline" size={38} color="gray" />
          <AppText style={[ss.txt]} size={16} type={2}>
            Please verify your email, link sendted to your email
          </AppText>
          <TouchableOpacity onPress={props.goBack} style={[ss.btn]}>
            <BtnPrimary text={'Go back'} />
          </TouchableOpacity>
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
    alignItems: 'center',
    marginHorizontal: 24,
    backgroundColor: colors.white,
  },
  txt: {
    textAlign: 'center',
  },
  btn: {
    width: 200,
    marginVertical: 12,
  },
});
