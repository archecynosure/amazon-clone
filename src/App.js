import './App.css';
import Header from "./Header"
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login.js"

function App() {
    return ( <
        Router >

        <
        div className = "app" >

        <
        Switch >
        <
        Route path = "/login" >
        <
        Login / > <
        /Route> <
        Route path = "/checkout" >
        <
        Header / >
        <
        Checkout / > <
        /Route> <
        Route path = "/" >
        <
        Header / >
        <
        Home / >
        <
        /Route> < /
        Switch > < /
        div > < /
        Router >
    );
}

export default App;