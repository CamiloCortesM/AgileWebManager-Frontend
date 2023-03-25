import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    errorMessage: null,
    todos: [],
    todoActive: null,
  },
  reducers: {
    onLoadTodos: (state, { payload }) => {
      state.todos = [...payload.todos];
    },
    onAddNewTodos: (state, { payload }) => {
      state.todos.push(payload.todo);
    },
    onDeleteTodo: (state, { payload }) => {
      const index = state.todos.findIndex((todo) => todo.id === payload);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    onDeleteCommentTodo: (state, { payload }) => {
      const index = state.todos.findIndex((todo) => todo.id === payload.todoId);
      if (index !== -1) {
        const indexComment = state.todos[index].comments.findIndex(
          (comment) => comment._id === payload.commentId
        );
        if (indexComment !== 1) {
          state.todos[index].comments.splice(indexComment, 1);
        }
      }
    },
    updateTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return payload;
        }
        return todo;
      });
    },
    onSetActiveTodo: (state, { payload }) => {
      state.todoActive = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onLoadTodos,
  onAddNewTodos,
  onDeleteTodo,
  updateTodo,
  onSetActiveTodo,
  onDeleteCommentTodo,
} = todoSlice.actions;
