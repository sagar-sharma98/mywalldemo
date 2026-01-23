import { configureStore } from "@reduxjs/toolkit";
import onBoardingReducer from "./slice/onBoarding";

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
