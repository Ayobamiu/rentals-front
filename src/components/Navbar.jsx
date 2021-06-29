import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  gotoListingPage,
  showSearchBarForNavbar,
} from "../services/showAndHides";
import { getLoggedInUser } from "../store/authSlice";

class Navbar extends Component {
  state = {
    search: "",
  };
  handleChange = (event) => {
    event.preventDefault();
    const search = event.target.value;
    this.setState({
      search,
    });
  };
  handleListingSearch = () => {
    window.location = "/listings";
  };
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            width: "100%",
            height: "100px", 
          }}
        >
          <div className="navbar" id="navbar">
            <NavLink className="navbar__logo" to="/">
              Logo
            </NavLink>
            <div className="navbar__search" id="navbar__search">
              <div className="navbar__search-search">
                <i className="fa fa-search navbar__search-icon"></i>
                <input
                  type="search"
                  name="search"
                  className="navbar__search-input"
                  placeholder="Where on Earth?"
                  onChange={this.handleChange}
                  onFocus={gotoListingPage}
                />
                <button
                  className="navbar__search-button"
                  onClick={this.handleListingSearch}
                >
                  Search
                </button>
              </div>
            </div>
            <span className="resize-icon-22" onClick={showSearchBarForNavbar}>
              <i className="fa fa-search "></i>
            </span>
            <NavLink className="navbar__link" to="/">
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
            <NavLink className="navbar__link btn-blue" to="/">
              Host a Home
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUser: state.app.user,
  getLoggedInUser: getLoggedInUser(),
});

// const matchDispatchToProps = (dispatch) => ({
//   loadLoggedInUser: () => dispatch(loadLoggedInUser()),
//   logUserIn: (email, password) => dispatch(logUserIn(email, password)),
// });

export default connect(mapStateToProps)(Navbar);
