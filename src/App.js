import React, { useEffect } from "react";
import './App.css';
import Header from "./Header"
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login.js"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment.js"
import { loadStripe } from "stripe";
import { Elements } from "@stripe/react-stripe-js"
function App() {
    const [{ }, dispatch] = useStateValue();

    useEffect(() => {

        //this is a listener
        auth.onAuthStateChanged(authUser => {
            console.log("The user is >>>", authUser);

            if (authUser) {
                //if the user is logged in, dispatches the user into the data layer
                dispatch({
                    type: "SET_USER",
                    user: authUser
                })
            }
            else {
                //the user is logged out

                dispatch({
                    type: "SET_USER",
                    user: null
                })
            }
        })
    }, [])

    return (
        <Router >

            <div className="app" >

                < Switch >
                    <Route path="/login" >
                        < Login />
                    </Route>
                    <Route path="/checkout" >
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment" >
                        <Header />
                        <Payment />
                    </Route>
                    <Route path="/" >
                        < Header />
                        <Home />
                    </Route>
                </Switch >
            </div >

        </Router >
    );
}

export default App;