import {configureStore} from '@reduxjs/toolkit';
import appState from './app';
import userState from './user';

export const store = configureStore({
  reducer: {
    app: appState,
    user: userState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
