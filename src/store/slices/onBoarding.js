import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  details: {
    name: null,
    phone: null,
  },
  loading: false,
  error: null,

  // for the future functionality
  showPaidCampaignModal: false,
  showApplyForAffiliateModal: false,
  showCollabsUnlockedModal: false,
  hideBarterProfileReviewBanner: false,
  fcmToken: null,
};

const onBoardingSlice = createSlice({
  name: "onBoarding",
  initialState,
  reducers: {
    setShowPaidCampaignModal: (state, action) => {
      state.showPaidCampaignModal = action.payload;
    },

    setShowApplyForAffiliateModal: (state, action) => {
      state.showApplyForAffiliateModal = action.payload;
    },

    setShowCollabsUnlockedModal: (state, action) => {
      state.showCollabsUnlockedModal = action.payload;
    },

    setHideBarterProfileReviewBanner: (state, action) => {
      state.hideBarterProfileReviewBanner = action.payload;
    },

    setFcmToken: (state, action) => {
      state.fcmToken = action.payload;
    },

    setOnBoardingDetails: (state, action) => {
      state.onBoarding = action.payload;
    },
  },
});

export default onBoardingSlice.reducer;

export const {
  setShowPaidCampaignModal,
  setShowApplyForAffiliateModal,
  setShowCollabsUnlockedModal,
  setHideBarterProfileReviewBanner,
  setFcmToken,
  setOnBoardingDetails,
} = onBoardingSlice.actions;
