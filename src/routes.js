import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import ListingsPage from "./components/ListingsPage";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";

class BaseRoutes extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/listings" component={ListingsPage} />
          <Route path="/" exact component={Homepage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BaseRoutes;
