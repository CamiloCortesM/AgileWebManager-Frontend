import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    errorMessage: null,
    users: [],
    activeUser: null,
  },
  reducers: {
    onSetActiveUser: (state, { payload }) => {
      state.activeUser = payload;
    },
    onDeleteActiveUser: (state, { payload }) => {
      state.activeUser = null;
    },
    onLoadUsers: (state, { payload }) => {
      state.errorMessage = false;
      state.users = [...payload.users];
    },
    addNewUser: (state, { payload }) => {
      state.users.push(payload);
    },
    onDeleteUser: (state, { payload }) => {
      const index = state.users.findIndex((user) => user.id === payload);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
    onUpdateUser: (state, { payload }) => {
      state.users = state.users.map((user) => {
        if (user.id === payload.id) {
          return payload;
        }
        return user;
      });
    },
    onLogoutUsers: (state) => {
      state.errorMessage = null;
      state.users = [];
      state.activeUser = null;
    },
  },
});

export const {
  onLoadUsers,
  addNewUser,
  onDeleteUser,
  onUpdateUser,
  onSetActiveUser,
  onDeleteActiveUser,
  onLogoutUsers,
} = usersSlice.actions;
