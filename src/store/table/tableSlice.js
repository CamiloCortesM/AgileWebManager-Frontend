import { createSlice } from '@reduxjs/toolkit';

export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        errorMessage: null,
        tables: [],
        tableActive: null
    },
    reducers: {
        isLoading: (state) => {
            state.errorMessage = null;
            state.tables = [];
        },
        onLoadTables: (state, { payload }) => {
            state.errorMessage = false;
            state.tables = [...payload.tables];
        },
        addNewTable: (state, { payload }) => {
            state.tables.push(payload.table);
        },
        deleteTable: (state, { payload }) => {
            const index = state.tables.findIndex((table) => table.id === payload);
            if (index !== -1) {
                state.tables.splice(index, 1);
            }
        },
        onActivetable: (state, { payload }) => {
            state.tableActive = payload;
        },
        onUpdateTable: (state, { payload }) => {
            state.tables = state.tables.map(table => {
                if (table.id === payload.id) {
                    return payload
                }
                return table;
            });
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    isLoading,
    onLoadTables,
    addNewTable,
    deleteTable,
    onActivetable,
    onUpdateTable,
} = tableSlice.actions;