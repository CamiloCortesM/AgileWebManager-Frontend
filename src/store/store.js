
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authSlice, tableSlice, todoSlice } from './';
import { usersSlice } from "./users/usersSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    table: tableSlice.reducer,
    todo: todoSlice.reducer,
    users: usersSlice.reducer,

  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),    "for is working with Date"
});
