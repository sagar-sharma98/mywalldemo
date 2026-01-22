import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
      state.onBoarding = action.payload;
    },
  },
});

export default onBoardingSlice.reducer;

export const { setOnBoardingDetails } = onBoardingSlice.actions;
