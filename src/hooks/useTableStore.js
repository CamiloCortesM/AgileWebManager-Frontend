import { useDispatch, useSelector } from 'react-redux';

import agileWebApi from '../api/config';

import {
    addNewTable,
    deleteTable,
    onLoadTables,
    onUpdateTable,
    onActivetable,
} from '../store';

export const useTableStore = () => {

    const { tables, tableActive } = useSelector((state) => state.table);
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

    const startUpdatedTable = async ({ id, name, desc }) => {
        try {
            const { data } = await agileWebApi.put(`tables/${id}`, { name: name, desc: desc });
            dispatch(onUpdateTable(data.table));
        } catch (error) {
            console.log(error);
        }
    }

    const startSetActiveTable = (table) => {
        dispatch(onActivetable(table));
    };

    return {
        //* Properties
        tableActive,
        tables,
        user,

        //* Methods
        startCreateTable,
        startDeleteTable,
        startGetTables,
        startSetActiveTable,
        startUpdatedTable,
    };
}

