import colors from '@colors';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ViewProps,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from '@styles';
import cList from '../../../../assets/mocks/numbers.list.json';
import {AppText} from '@components';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes extends ViewProps, ViewProps {
  visible: boolean;
  setCCode(obj: any): void;
  setNumberModal(el: boolean): void;
}

export default function CountryList(props: PropTypes) {
  return (
    <Modal
      isVisible={props.visible}
      animationInTiming={150}
      animationOutTiming={150}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      hideModalContentWhileAnimating={true}
      onBackButtonPress={() => {
        props.setNumberModal(false);
      }}
      onBackdropPress={() => {
        props.setNumberModal(false);
      }}
      backdropTransitionOutTiming={0}
      style={[ss.root]}
      scrollHorizontal={true}>
      <View style={[ss.content]}>
        <ListHeader setNumberModal={props.setNumberModal} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={cList}
          renderItem={({item}) => (
            <ListItem
              item={item}
              setCCode={props.setCCode}
              setNumberModal={props.setNumberModal}
            />
          )}
          keyExtractor={item => item.name}
          initialNumToRender={5}
        />
      </View>
    </Modal>
  );
}

function ListHeader(props: any) {
  return (
    <View style={[ss.header]}>
      <AppText size={18} type={3} style={[]}>
        Country Code
      </AppText>
      <TouchableOpacity onPress={() => props.setNumberModal(false)}>
        <Icon name="close-circle-outline" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

function ListItem(props: any) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.setNumberModal(false);
        props.setCCode(props.item);
      }}
      style={[ss.country]}>
      <AppText size={16} type={2} style={[]}>
        {props.item.name}
      </AppText>
      <AppText size={16} type={2} style={[ss.ccode]}>
        {props.item.dial_code}
      </AppText>
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  root: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    height: Dimensions.get('window').height * 0.6,
    padding: 6,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    paddingVertical: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  country: {
    paddingHorizontal: 30,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ccode: {
    paddingHorizontal: 6,
  },
});
