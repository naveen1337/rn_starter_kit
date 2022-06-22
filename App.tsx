import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import RootNavigation from './src/navigation/root.nav';
import {Provider} from 'react-redux';
import {store} from './src/store';

function App() {
  return (
    <SafeAreaView style={ss.root}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </SafeAreaView>
  );
}

const ss = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
