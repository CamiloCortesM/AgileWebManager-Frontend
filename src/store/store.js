import { configureStore } from '@reduxjs/toolkit';
import { authSlice, tableSlice, todoSlice } from './';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    table: tableSlice.reducer,
    todo: todoSlice.reducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),    "for is working with Date"
});
