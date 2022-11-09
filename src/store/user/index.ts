import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: any = {
  authtoken: null,
  userInfo: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateAuthToken: (state: any, action: any) => {
      state.authtoken = action.payload;
    },
    updateUserInfo: (state: any, action: any) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateAuthToken, updateUserInfo} = userSlice.actions;

export default userSlice.reducer;
