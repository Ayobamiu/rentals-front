import React, { Component } from "react";
import { connect } from "react-redux";
import { hideOnScroll } from "../services/showAndHides";
import MainNavbar from "./common/MainNavbar";
import { addListing, loadListings } from "../store/listingSlice";
import SearchBar from "./common/SearchBar";

class ListingsPage extends Component {
  state = {};
  componentDidMount() {
    window.onscroll = function () {
      hideOnScroll();
    };
  }
  handleSearch = (searchQuery) => {
    const params = new URLSearchParams([["search", searchQuery]]);
    this.props.loadListings(params);
  };
  render() {
    return (
      <div className="listings-page">
        <MainNavbar />

        <SearchBar getSearchQuery={this.handleSearch} />

        {/* <PopUpFilter /> */}

        {this.props.listings.map((listing) => (
          <div key={listing._id}>{listing.title}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listings: state.app.listings.list,
  loggedInUser: state.app.user.profile,
});

const matchDispatchToProps = (dispatch) => ({
  loadListings: (params) => dispatch(loadListings(params)),
  addListing: (listing) => dispatch(addListing(listing)),
});

export default connect(mapStateToProps, matchDispatchToProps)(ListingsPage);
