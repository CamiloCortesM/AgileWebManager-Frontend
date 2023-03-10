import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
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
        updateTodo: (state, { payload }) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === payload.id) {
                    return payload
                }
                return todo;
            });
        },
        onSetActiveTodo: (state, { payload }) => {
            state.todoActive = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onLoadTodos,
    onAddNewTodos,
    onDeleteTodo,
    updateTodo,
    onSetActiveTodo,
} = todoSlice.actions;