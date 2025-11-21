import {createSlice} from '@reduxjs/toolkit';
const propertySlice=createSlice({
    name:'property',
    initialState:{
        properties:[],
        loading:false,
        error:null,
        totalProperties:0,
        searchParams:{}
    },
    reducers:{
        getRequest(state){
            state.loading=true;
        },
        getProperties(state,action){
            state.loading=false;
            state.properties=action.payload.data;
            state.totalProperties=action.payload.all_properties;
        },
        updateSearchParams(state,action){
            state.searchParams=Object.keys(action.payload).length===0 ? {} : {
                ...state.searchParams,
                ...action.payload};
        },
        getErrors(state,action){
            state.error=action.payload;
        }
    }
});
export const propertyAction=propertySlice.actions;
export default propertySlice;

