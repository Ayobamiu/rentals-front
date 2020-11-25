import React, { Component } from "react";
import { connect } from "react-redux";
import { hideOnScroll } from "../services/showAndHides";
import { getLoggedInUser } from "../store/authSlice";
import MainNavbar from "./common/MainNavbar";
import SearchBar from "./common/SearchBar";

class FirstSection extends Component {
  state = {};
  componentDidMount() {
    window.onscroll = function () {
      hideOnScroll();
    };
  }
  handleSearch = (searchQuery) => {};
  render() {
    return (
      <React.Fragment>
        <div className="homepage-first-section">
          <MainNavbar />
          <main
            className="homepage-main-message"
            id="homepage-main-message-search"
          >
            <h1 className="homepage-main-message-text">
              Find short-term and long-term stay in rooms anywhere
            </h1>
            <p className="homepage-main-message-para">
              Getting a room and making money from your free space has been made
              very easy. <a href="#">Host a Home</a> to start making money off
              your free space. Or use the search bar to get yourself a decent
              affordable stay.
            </p>
            <SearchBar getSearchQuery={this.handleSearch} />
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

const mapStateToProps = (state) => ({
  loggedInUser: state.app.user,
  getLoggedInUser: getLoggedInUser(),
});

export default connect(mapStateToProps)(FirstSection);
