import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getInfluencerByIdAPI } from "../../services/handleApi";

const initialState = {
  user: null,
};

export const fetchInfluencerById = createAsyncThunk(
  "onBoarding/fetchInfluencerById",
  async (id) => {
    try {
      const response = await getInfluencerByIdAPI(id);
      console.log("get the response infulencer data from the api", response);
      return response;
    } catch (error) {
      console.error("Error", error);
    }
  },
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfluencerById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInfluencerById.fulfilled, (state, action) => {
        state.loading = false;
        state.onBoarding = action.payload;
      })
      .addCase(fetchInfluencerById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { setOnBoardingDetails, clearOnBoarding } =
  onBoardingSlice.actions;

export default onBoardingSlice.reducer;
