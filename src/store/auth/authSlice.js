import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    state: 'checking', // "checking" "login-not-athenticated"  "not-authenticated" "authenticated"
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.state = 'checking';
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.state = 'not-authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    },
    onVerify: (state, { payload }) => {
      state.state = 'authenticated';
      state.errorMessage = undefined;
    },
    onUpdate: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
      state.errorMessage = undefined;
    },
    onError: (state, { payload }) => {
      state.errorMessage = payload;
    },
    onLogout: (state, { payload }) => {
      state.state = 'login-not-athenticated';
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  clearErrorMessage,
  onChecking,
  onError,
  onLogin,
  onLogout,
  onUpdate,
  onVerify,
} = authSlice.actions;
