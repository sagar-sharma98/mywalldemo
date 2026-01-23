import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: null, // stores Amplify signIn response
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    clearAuthUser: (state) => {
      state.authUser = null;
    },
  },
});

export const { setAuthUser, clearAuthUser } = authSlice.actions;

export default authSlice.reducer;
