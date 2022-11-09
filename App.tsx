// import ' ';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar,Text, StyleSheet } from 'react-native';
import RootNavigation from './src/navigation/root-nav';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './src/store';

export const queryClient = new QueryClient();

function App() {
  return (
    <SafeAreaView style={ss.root}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(20, 50, 88, 1)"
      />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GestureHandlerRootView style={ss.root}>
          <RootNavigation />
          </GestureHandlerRootView>
        </Provider> 
      </QueryClientProvider>
    </SafeAreaView>
  );
}

const ss = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;