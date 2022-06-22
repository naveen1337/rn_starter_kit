import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AppView from '../atoms/app.view';
import AppText from '../atoms/app.text';
import {HomeTab} from '../../../assets/icons.manifest';
import colors from '../../../constants/constants.colors';
import {useSelector} from 'react-redux';
import {themeSelector} from '@state/state.app/app.selector';

export default function CustomBottomTab({state, descriptors, navigation}) {
  const theme = useSelector(themeSelector);
  const css = computeStyle(colors, theme.dT);
  return (
    <View style={[ss.root]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity key={label} onPress={onPress} style={ss.item}>
            {index === 0 && <HomeTab theme={false} active={isFocused} />}
            {index === 1 && <HomeTab theme={false} active={isFocused} />}
            {index === 2 && <HomeTab theme={false} active={isFocused} />}
            {index === 3 && <HomeTab theme={false} active={isFocused} />}
            <AppText style={[ss.txt, isFocused && ss.activeTxt]}>
              {label}
            </AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function computeStyle(colors: any, darkTheme: boolean) {
  return StyleSheet.create({
    root: {
      backgroundColor: darkTheme ? colors.gold : colors.white,
    },
  });
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blue,
    paddingVertical: 4,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    padding: 6,
  },
  txt: {
    color: colors.white,
    fontSize: 10,
    textTransform: 'uppercase',
  },
  activeTxt: {
    color: colors.white,
  },
});
