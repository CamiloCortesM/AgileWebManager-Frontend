import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authSlice } from "./";
import { usersSlice } from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: usersSlice.reducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),    "for is working with Date"
});
