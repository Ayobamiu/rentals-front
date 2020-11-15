import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { showFilter, showSearchBarForNavbar } from "../services/showAndHides";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            width: "100%",
            height: "79px",
          }}
        >
          <div className="navbar" id="navbar">
            <NavLink className="navbar__logo" to="/">
              Logo
            </NavLink>
            <NavLink className="navbar__search" id="navbar__search" to="/">
              <div className="navbar__search-search">
                <i className="fa fa-search navbar__search-icon"></i>
                <input
                  type="search"
                  name="search"
                  className="navbar__search-input"
                  placeholder="Where on Earth?"
                />
                <button className="navbar__search-button">Search</button>
              </div>
            </NavLink>
            <span className="resize-icon-22" onClick={showSearchBarForNavbar}>
              <i className="fa fa-search "></i>
            </span>
            <NavLink className="navbar__link" to="/">
              <span className="resize-icon-22">
                <i className="fa fa-heart-o "></i>
              </span>
            </NavLink>
            <NavLink className="navbar__link btn-blue" to="/">
              Host a Home
            </NavLink>
            <NavLink className="navbar__link btn-white" to="/signup">
              Sign Up
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
