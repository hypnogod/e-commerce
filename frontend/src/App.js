import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Copyright from "./Components/Copyright/Copyrigth";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Register/Register";
import Checkout from "./Components/Checkoutpage/Checkout";
import ProductScreen from "./Components/ProductScreen/ProductScreen";
import Shipping from "./Components/Shipping/Shipping";
import Forgot from "./Components/Forgot/Forgot"
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route path="/shipping">
            <Nav />
            <Shipping />
            <Footer />
            <Copyright />
          </Route>
          <Route path="/checkout">
            <Nav />
            <Route component={Checkout} path="/checkout/:id?" />
            <Footer />
            <Copyright />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/help">
            <Nav />
          </Route>
          <Route path="/product">
            <Nav />
            <Route path="/product/:id" component={ProductScreen} />
            <Footer />
            <Copyright />
          </Route>
          <Route path="/" exact>
            <Nav />
            <Home />
            <Footer />
            <Copyright />
          </Route>
          <Route path="*">
            <h1>Not found</h1>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
