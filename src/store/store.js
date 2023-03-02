import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authSlice } from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),    "for is working with Date"
});
