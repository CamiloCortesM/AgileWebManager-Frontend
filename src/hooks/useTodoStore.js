
import { useDispatch, useSelector } from 'react-redux';

import agileWebApi from '../api/agileWebApi';
import { onAddNewTodos, onDeleteTodo, onLoadTodos, onSetActiveTodo, updateTodo } from '../store';

export const useTodoStore = () => {

    const { todos, todoActive } = useSelector((state) => state.todo);
    const { tables } = useSelector((state) => state.table);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const startLoadTodos = async () => {
        try {
            const { data } = await agileWebApi.get("todos");
            dispatch(onLoadTodos(data));
        } catch (error) {
            console.log(error);
        }
    };

    const startSaveTodos = async ({ status, name, desc, tableId }) => {
        try {
            const { data } = await agileWebApi.post("todos", { name: name, desc: desc, status: status, tableId: tableId });
            dispatch(onAddNewTodos(data));
        } catch (error) {
            console.log(error);
        }
    };

    const startDeleteTodo = async ({ id }) => {
        try {
            const { data } = await agileWebApi.delete(`todos/${id}`);
            dispatch(onDeleteTodo(id));
        } catch (error) {
            console.log(error);
        }
    };

    const startSetActiveTodo = (todo) => {
        dispatch(onSetActiveTodo(todo));
    };

    const startUpdateTodo = async ({ id, name, desc, status }) => {
        try {
            const { data } = await agileWebApi.put(`todos/${id}`, { name: name, desc: desc, status: status });
            dispatch(updateTodo(data.todo));
        } catch (error) {
            console.log(error);
        }
    }

    return {
        //* Properties
        tables,
        todoActive,
        todos,
        user,

        //* Methods
        startDeleteTodo,
        startLoadTodos,
        startSaveTodos,
        startSetActiveTodo,
        startUpdateTodo,
    }
};
