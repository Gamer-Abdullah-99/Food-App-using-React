import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RestaurantSignUp from "../components/restaurantsignup/restaurantSignup";
import CustomerSignup from "../components/customersignup/customerSignup";
import Login from "../components/login/login";
import RestaurantHome from "../components/restauranthome/restaurantHome";
import Navigbar from "../components/navbar/navbar";
import NewDish from "../components/newdish/newdish";
import { GlobalContext } from "../context/context";

export default function Routing() {

    const { state, dispatch } = useContext(GlobalContext);

    return (
        <Router>
            <Navigbar />
            <Switch>
                <Route path='/res-reg'>
                    <RestaurantSignUp />
                </Route>
                <Route path='/cus-reg' >
                    <CustomerSignup />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                {state.authUser.role === 'customer' ?
                    <>

                    </> : state.authUser.role === 'restaurant' ?
                        <>
                            <Route path='/res-home'>
                                <RestaurantHome />
                            </Route>
                            <Route path='/add-dish'>
                                <NewDish />
                            </Route>
                        </> : null
                }
            </Switch>
        </Router>
    )
}