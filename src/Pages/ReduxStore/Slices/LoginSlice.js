import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name:'login',
    initialState:{token:null,isLoggedIn:false},
    reducers:{
        login(state, action) {
            state.token = action.payload
            state.isLoggedIn = !!state.token
            console.log(state.token, state.isLoggedIn)
        }
    }
})

export const loginAction = LoginSlice.actions

export default LoginSlice
