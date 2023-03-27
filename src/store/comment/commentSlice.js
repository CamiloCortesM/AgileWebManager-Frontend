import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    errorMessage: null,
    comments: [],
  },
  reducers: {
    onLoadComments: (state, { payload }) => {
      state.comments = [...payload];
    },
    onAddNewComments: (state, { payload }) => {
      state.comments.push(payload.comment);
    },
    onDeleteComment: (state, { payload }) => {
      const index = state.comments.findIndex(
        (comment) => comment._id === payload
      );
      if (index !== -1) {
        state.comments.splice(index, 1);
      }
    },
    onLogoutComments: (state) => {
      state.comments = [];
      state.errorMessage = null;
    },
  },
});

export const {
  onLoadComments,
  onAddNewComments,
  onDeleteComment,
  onLogoutComments,
} = commentSlice.actions;
