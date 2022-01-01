import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestaurantSignUp from "../components/restaurantsignup/restaurantSignup";
import CustomerSignup from "../components/customersignup/customerSignup";
import Login from "../components/login/login";
import RestaurantHome from "../components/restauranthome/restaurantHome";

export default function Routing() {



    return (
        <Router>
            <Routes>
                <Route path='/res-reg' element={<RestaurantSignUp />} />
                <Route path='/cus-reg' element={<CustomerSignup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/res-home' element={<RestaurantHome />} />
            </Routes>
        </Router>
    )
}