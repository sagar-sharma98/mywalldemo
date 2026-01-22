import { configureStore } from "@reduxjs/toolkit";
import onBoardingReducer from "./slices/onBoardingSlice";

export const store = configureStore({
  reducer: {
    onBoarding: onBoardingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
