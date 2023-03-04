import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    state: "not-authenticated", // "checking" "login-not-athenticated"  "new-user" "authenticated"
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.state = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onPhone: (state, { payload }) => {
      state.user = { ...user, phone: payload.phone };
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.state = "login-not-athenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onCreate: (state) => {
      state.state = "new-user";
      state.errorMessage = undefined;
    },
    onVerify: (state, { payload }) => {
      state.state = "authenticated";
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.state = "not-authenticated";
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  onChecking,
  onCreate,
  onLogin,
  onLogout,
  onVerify,
  clearErrorMessage,
  onPhone,
} = authSlice.actions;
