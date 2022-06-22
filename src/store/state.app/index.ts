import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AppState {
  darkTheme: boolean;
}

const initialState: AppState = {
  darkTheme: true,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.darkTheme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeTheme} = appSlice.actions;

export default appSlice.reducer;
