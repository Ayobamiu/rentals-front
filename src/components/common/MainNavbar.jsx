import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class MainNavbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
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
        <div style={{ marginBottom: "80px" }}></div>
      </React.Fragment>
    );
  }
}

export default MainNavbar;
