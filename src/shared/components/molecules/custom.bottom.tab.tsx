import React, { useRef } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import AppView from '../atoms/app.view';
import AppText from '../atoms/app.text';
import { HomeTab, TaskTab, MapTab } from '@icons'
import { Transition, Transitioning } from 'react-native-reanimated';

import colors from '../../../assets/constants/constants-colors';
import styles from '../../../assets/constants/constants-styles'

export default function CustomBottomTab({ state, descriptors, navigation }) {
  const ref1: any = useRef(null);
  const ref2: any = useRef(null);
  const ref3: any = useRef(null);

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={10} />
      <Transition.Change interpolation="easeInOut" durationMs={100} />
      <Transition.In type="fade" durationMs={100} />
    </Transition.Sequence>
  );

  return (
    <AppView style={[ss.root]}>
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel;
        const isFocused = state.index === index;

        const onPress = (itemPress: number) => {
          console.log(index);
          if (itemPress === 0) {
            ref1?.current?.animateNextTransition();
          }
          if (itemPress === 1) {
            ref2?.current?.animateNextTransition();
          }
          if (itemPress === 2) {
            ref3?.current?.animateNextTransition();
          }

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <TouchableOpacity
            key={label}
            onPress={() => onPress(index)}
            style={ss.item}>
            <Transitioning.View
              ref={index === 0 ? ref1 : index === 1 ? ref2 : ref3}
              transition={transition}
              style={[ss.tab, isFocused ? ss.activeTab : {}]}>
              {index === 0 && <HomeTab active={isFocused} />}
              {index === 1 && <MapTab active={isFocused} />}
              {index === 2 && <TaskTab active={isFocused} />}
              {isFocused && <AppText style={[ss.txt]}>{label}</AppText>}
            </Transitioning.View>
          </TouchableOpacity>
        );
      })}
    </AppView>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.gray1,
  },
  item: {
    flex: 5,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },

  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  activeTab: {
    paddingHorizontal: 16,
    backgroundColor: 'rgba(20, 50, 88, 0.1)',
    borderRadius: 16,
  },
  txt: {
    fontSize: 10,
    color: colors.dark,
    textTransform: 'uppercase',
    paddingLeft: 6,
  },
});
