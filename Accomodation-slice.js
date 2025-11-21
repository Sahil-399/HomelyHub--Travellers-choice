import {createSlice} from '@reduxjs/toolkit';
const accomodationSlice=createSlice({
    name:'accomodation',
    initialState:{
        accomodations:[],
        loading:false,
        error:null
    },
    reducers:{
        getAccomodationRequests(state){
            state.loading=true;
        },
        getAccomodation(state,action){
            state.loading=false;
            state.accomodations=action.payload;
        },
        getErrors(state,action){
            state.loading=false;
            state.error=action.payload;
        }
    }
});
export const accomodationActions=accomodationSlice.actions;
export default accomodationSlice;