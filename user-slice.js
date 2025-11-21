import {createSlice} from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:"User",
    initialState:{
        isAuthenticated: false,
        Loading: false,
        user: null,
        error: null,
        success: false
    },
    reducers:{
        getSignupRequest(state){
            state.Loading=true;
        },
        getSignupDetails(state,action){
            state.Loading=false;
            state.isAuthenticated=true;
            state.user=action.payload;  
        },
        getLoginRequest(state){
            state.Loading=true;
        },
        getLoginDetails(state,action){
            state.Loading=false;
            state.isAuthenticated=true;
            state.user=action.payload;  
        },
        getError(state,action){
            state.Loading=false;
            state.error=action.payload;
        },
        getCurrentUserRequest(state){
            state.Loading=true;
        },
        getUpdateUserRequest(state){
            state.Loading=true;
        },
        getLogoutRequest(state){
            state.Loading=true;
        },
        getCurrentUser(state,action){
            state.Loading=false;
            state.isAuthenticated=true;
            state.user=action.payload;  
        },
        getLogout(state){
            state.Loading=false;
            state.isAuthenticated=false;
            state.user=null;  
        },
        getPasswordRequest(state){
            state.Loading=true;
        },
        getPasswordsuccess(state,action){
            state.errors=null;
            state.success=action.payload;
        },
        clearErrors(state){
            state.error=null;
        }   
    }
});
export const userActions=userSlice.actions;
export default userSlice;