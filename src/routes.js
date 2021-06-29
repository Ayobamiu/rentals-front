import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AddListing from "./components/AddListing/AddListing";
import CustomerPaymentHistory from "./components/CustomerPaymentHistory/CustomerPaymentHistory";
import DashBoard from "./components/DashBoard/DashBoard";
import Homepage from "./components/HomePage/Homepage";
import LandlordDashboard from "./components/LandlordDashboard/LandlordDashboard";
import ListingDetailsPage from "./components/ListingPage/ListingDetailsPage";
import ListingsPage from "./components/ListingsPage";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Pay from "./components/Pay";
import RenterSinglePropertyDetail from "./components/RenterSinglePropertyDetail/RenterSinglePropertyDetail";
import SearchPage from "./components/SearchPage/SearchPage";
import SignLeaseAgreement from "./components/SignLeaseAgreement/SignLeaseAgreement";
import SignUp from "./components/SignUp";

class BaseRoutes extends Component {
  state = {};
  componentDidMount() {}
  sendData = () => {
    this.props.setParamsFromApp("second");
  };
  render() {
    // this.sendData();
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/pay" component={Pay} />
          <Route path="/add-listing" component={AddListing} />
          <Route path="/signup" component={SignUp} />
          <Route path="/landlord-dashboard" component={LandlordDashboard} />
          <Route path="/dashboard" component={DashBoard} />
          <Route
            path="/renter-request/:listingId"
            component={RenterSinglePropertyDetail}
          />
          <Route
            path="/customer-payment-history"
            component={CustomerPaymentHistory}
          />
          <Route path="/sign-lease" component={SignLeaseAgreement} />
          <Route path="/login" component={Login} />
          <Route path="/listings/:id" component={ListingDetailsPage} />
          <Route path="/listings" component={ListingsPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/" exact component={Homepage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BaseRoutes;
