import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        state:"checking", // "not-authenticated" "login-not-athenticated"  "new-user" "authenticated"
        user:{},
        errorMessage:undefined
    },
    reducers: {
        onChecking: (state) =>{
            state.state = "checking";
            state.user = {},
            state.errorMessage = undefined;
        },
        onLogin: (state, {payload}) =>{
            state.state = "login-not-athenticated";
            state.user = payload,
            state.errorMessage = undefined;
        },
        onCreate: (state) =>{
            state.state = "new-user";
            state.errorMessage = undefined;
        },
        onVerify: (state,{payload}) =>{
            state.state = "authenticated";
            state.user = payload,
            state.errorMessage = undefined;
        },
        onLogout: (state,{payload}) =>{
            state.state = "not-authenticated";
            state.user = {};
            state.errorMessage = payload;
        },
    },
})



export const {onChecking,onCreate,onLogin,onLogout,onVerify} = authSlice.actions