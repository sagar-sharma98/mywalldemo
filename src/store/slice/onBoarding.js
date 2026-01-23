import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const onBoardingSlice = createSlice({
  name: "onBoarding",
  initialState,
  reducers: {
    setOnBoardingDetails: (state, action) => {
      state.user = action.payload;
    },
    clearOnBoarding: (state) => {
      state.user = null;
    },
  },
});

export const { setOnBoardingDetails, clearOnBoarding } =
  onBoardingSlice.actions;

export default onBoardingSlice.reducer;
