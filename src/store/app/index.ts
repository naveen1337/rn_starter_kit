import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  toggle: false
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateToggle: (state: any, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

export const { updateToggle } = appSlice.actions;

export default appSlice.reducer;
