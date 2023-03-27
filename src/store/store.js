import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authSlice, tableSlice, todoSlice } from "./";
import { commentSlice } from "./comment/commentSlice";
import { usersSlice } from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    table: tableSlice.reducer,
    todo: todoSlice.reducer,
    users: usersSlice.reducer,
    comment: commentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
