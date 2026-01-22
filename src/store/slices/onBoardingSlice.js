import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {
    name: null,
    phone: null,
  },
  loading: false,
  error: null,
};

const onBoardingSlice = createSlice({
  name: "onBoarding",
  initialState,
  reducers: {
    setOnBoardingDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { setOnBoardingDetails } = onBoardingSlice.actions;

export default onBoardingSlice.reducer;
