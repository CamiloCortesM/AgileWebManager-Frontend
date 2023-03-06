import { useDispatch, useSelector } from 'react-redux';

import agileWebApi from '../api/agileWebApi';

import {
    addNewTable,
    deleteTable,
    onLoadTables
} from '../store';

export const useTableStore = () => {

    const { tables } = useSelector((state) => state.table);
    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();



    const startGetTables = async () => {
        try {
            const { data } = await agileWebApi.get("tables");
            dispatch(onLoadTables(data));
        } catch (error) {
            console.log(error);
        }
    };

    const startCreateTable = async ({ name, desc }) => {
        try {
            const { data } = await agileWebApi.post("tables", { name: name, desc: desc });
            dispatch(addNewTable(data));
        } catch (error) {
            console.log(error);
        }
    };

    const startDeleteTable = async ({ id }) => {
        try {
            const { data } = await agileWebApi.delete(`tables/${id}`);
            dispatch(deleteTable(id));
        } catch (error) {
            console.log(error);
        }
    };

    return {
        //* Properties
        tables,
        user,

        //* Methods
        startGetTables,
        startCreateTable,
        startDeleteTable,
    };
}

