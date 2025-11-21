import {createSlice} from '@reduxjs/toolkit';
 const initialState = {
   bookings: [],
   loading: false,
   bookingDetails: {},
 }
 const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setBookings(state, action) {
            state.bookings = action.payload;
            state.loading = false;
        },
        sendBookingRequest(state) {
            state.loading = true;
        },
        setBookingDetails(state, action) {
            state.bookingDetails = action.payload.bookings;
        },
        addBooking(state, action) {
            state.bookings.push(action.payload);
        }
    }
 });
 export const {setBookings, setBookingDetails, addBooking} = bookingSlice.actions;
 export default bookingSlice;
 