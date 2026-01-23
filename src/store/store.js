import { configureStore } from "@reduxjs/toolkit";
import onBoardingReducer from "./slice/onBoarding";
import authReducer from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    onBoarding: onBoardingReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
