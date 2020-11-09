import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  hideOnScroll,
  showFilter,
  showSearchBar,
} from "../services/showAndHides";

class FirstSection extends Component {
  state = {};
  componentDidMount() {
    window.onscroll = function () {
      hideOnScroll();
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="homepage-first-section">
          <div className="main-navbar" id="main-navbar">
            <NavLink className="main-navbar__logo" to="/">
              Logo
            </NavLink>
            <NavLink
              className="main-navbar__search"
              id="main-navbar__search"
              to="/"
            >
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
                <i className="fa fa-filter" onClick={showFilter}></i>
                <span
                  className="main-navbar__search-filter-text"
                  onClick={showFilter}
                >
                  Filters
                </span>
              </div>
              <div className="pop-up-filter" id="pop-up-filter"></div>
            </NavLink>
            <span
              id="hideAndShowSearch"
              className="resize-icon-22"
              onClick={showSearchBar}
            >
              <i className="fa fa-search "></i>
            </span>
            <NavLink className="main-navbar__link" to="/">
              <span className="resize-icon-22">
                <i className="fa fa-heart-o "></i>
              </span>
            </NavLink>
            <NavLink className="main-navbar__link btn-blue" to="/">
              Host a Home
            </NavLink>
            <NavLink className="main-navbar__link btn-white" to="/signup">
              Sign Up
            </NavLink>
          </div>

          <main
            className="homepage-main-message"
            id="homepage-main-message-search"
          >
            <h1 className="homepage-main-message-text">
              Find short-term and long-term stay in rooms anywhere
            </h1>
            <div className="homepage-main-message-search" id="homepageSearch">
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
            </div>
            <a className="rooms-near-me" href="#">
              <i className="fa fa-map-marker rooms-near-me-icon"></i>
              <span>Rooms near my Location</span>
            </a>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default FirstSection;
