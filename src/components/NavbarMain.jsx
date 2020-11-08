import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavbarMain extends Component {
  state = {};
  showFilter = () => {
    const popUpFilter = document.getElementById("pop-up-filter");
    if (popUpFilter.style.display === "block") {
      popUpFilter.style.display = "none";
    } else {
      popUpFilter.style.display = "block";
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="main-navbar">
          <NavLink className="main-navbar__logo" to="/">
            Logo
          </NavLink>
          <NavLink className="main-navbar__search" to="/">
            <div className="main-navbar__search-search">
              <i className="fa fa-search main-navbar__search-icon"></i>
              <input
                type="search"
                name="search"
                className="main-navbar__search-input"
                placeholder="Where on Earth?"
              />
              <button className="main-navbar__search-button">Search</button>
            </div>
            <div className="main-navbar__search-filter">
              <i className="fa fa-bars" onClick={this.showFilter}></i>
              <span
                className="main-navbar__search-filter-text"
                onClick={this.showFilter}
              >
                Filters
              </span>
            </div>
            <div className="pop-up-filter" id="pop-up-filter"></div>
          </NavLink>
          <NavLink className="main-navbar__link" to="/">
            <i className="fa fa-heart-o fa-2x"></i>
          </NavLink>
          <NavLink className="main-navbar__link btn-blue" to="/">
            Host a Home
          </NavLink>
          <NavLink className="main-navbar__link btn-white" to="/">
            Sign Up
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default NavbarMain;
