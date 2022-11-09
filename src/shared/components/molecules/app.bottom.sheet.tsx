import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {AppView, AppText} from '@components';
import {Modalize} from 'react-native-modalize';
import {Close} from '@icons';
import colors from '../../../assets/constants/constants-colors';
import Modal from 'react-native-modal';

interface PropTypes {
  sheet: any;
  children: React.ReactNode;
}

export default function AppBottomSheet(props: PropTypes) {
  return (
    <Modalize
      ref={props.sheet}
      useNativeDriver={true}
      withHandle={false}
      modalTopOffset={200}
      adjustToContentHeight={true}
      disableScrollIfPossible={false}
      HeaderComponent={<SheetHeader sheet={props.sheet} />}
      closeOnOverlayTap={true}>
      <View style={[ss.container]}>{props.children}</View>
    </Modalize>
  );
}

function SheetHeader(props: any) {
  return (
    <TouchableOpacity
      onPress={() => props.sheet?.current?.close()}
      style={[ss.header]}>
      <View style={[ss.close, ss.icon]}>
        <Close />
      </View>
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  header: {
    backgroundColor: 'red',
  },
  icon: {},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 26,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  initFrame: {
    height: 32,
    backgroundColor: '#00000029',
    opacity: 0.5,
    transform: [{scale: 3}, {skewY: '9deg'}],
  },
  topFrame: {
    height: 32,
    backgroundColor: 'yellow',
    // transform: [{scale: 4}, {skewY: '9deg'}],
    position: 'absolute',
    left: 0,
    bottom: 10,
  },

  close: {
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 15,
    transform: [{rotate: '50deg'}],
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    // backgroundColor: 'green',
    // height: 40,
    // bottom: 40,
  },
});
