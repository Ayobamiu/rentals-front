import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  gotoListingPage,
  showFilter,
  showSearchBar,
} from "../../services/showAndHides";
import { getLoggedInUser } from "../../store/authSlice";
import PopUpFilter from "./PopUpFilter";
class MainNavbar extends Component {
  state = {};
  handleListingSearch = () => {
    window.location = "/listings";
    console.log("Search");
  };
  render() {
    return (
      <div className="main-navbar" id="main-navbar">
        <NavLink className="main-navbar__logo" to="/">
          Logo
        </NavLink>
        <NavLink
          to="/listings"
          id="hideAndShowSearch"
          className="resize-icon-22"
        >
          <i className="fa fa-search "></i>
        </NavLink>
        <NavLink className="main-navbar__link" to="/">
          <span className="resize-icon-22">
            <i className="fa fa-heart-o "></i>
          </span>
        </NavLink>
        {this.props.getLoggedInUser ? (
          <NavLink className="main-navbar__link" to="/">
            <span className="resize-icon-22">
              <i className="fa fa-user-circle "></i>
            </span>
          </NavLink>
        ) : (
          <NavLink className="main-navbar__link btn-white" to="/signup">
            Sign Up
          </NavLink>
        )}
        <NavLink className="main-navbar__link btn-blue" to="/">
          Host a Home
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUser: state.app.user,
  getLoggedInUser: getLoggedInUser(),
});

export default connect(mapStateToProps)(MainNavbar);
