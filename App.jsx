import "./App.css";
import Main from "./components/home/Main"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PropertyList from "./components/propertyListing/PropertyListing";
import PropertyListing from "./components/propertyListing/PropertyListing";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./store/User/user-slice";
import React from "react";
import { currentUser } from "./store/User/user-action";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import EditProfile from "./components/user/EditProfile";
import BookingDetails from "./components/myBookings/BookingDetails";
import MyBookings from "./components/myBookings/myBookings";
import Payment from "./components/payment/Payment";
import NotFound from "./components/NotFound";

import Accomadation from "./components/accomodation/Accomodation";
import AccomadationForm from "./components/accomodation/AccomodationForm";

function App() {
  const dispatch = useDispatch(); 
  const{errors,user}= useSelector((state)=>state.user);
  useEffect(() => {
    if(errors){  
    dispatch(userActions.clearErrors());  
    }},[dispatch]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route index element={<PropertyList/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="/rent/listing/:id" element={<propertyListing/>} />
            <Route path="editprofile" element={user? <EditProfile/>:<Navigate to="/login"/>}/>
            <Route path="user/mybookings" element={user? <MyBookings/>:<Navigate to="/login"/>}/>
            <Route path="user/mybookings/:bookingId" element={user? <BookingDetails/>:<Navigate to="/login"/>}/>
            <Route path="payment/:propertyId" element={user? <Payment/>:<Navigate to="/login"/>}/>
            <Route path="*" element={<NotFound/>}/> 
            <Route path="accomodation" element={<Accomadation/>}/> 
            <Route path="accomodationform" element={<AccomadationForm/>}/>      
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
