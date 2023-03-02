import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        state:"checking", // "not-authenticated" "authenticated"
        user:{},
        errorMessage:undefined
    },
    reducers: {
        // TODO: reducers for auth
    },
})



export const {} = authSlice.actions