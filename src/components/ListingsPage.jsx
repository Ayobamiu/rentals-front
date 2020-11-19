import React, { Component } from "react";
import { connect } from "react-redux";
import { hideOnScroll } from "../services/showAndHides";
import MainNavbar from "./common/MainNavbar";
import { addListing, loadListings } from "../store/listingSlice";
import SearchBar from "./common/SearchBar";
import PopUpFilter from "./common/PopUpFilter";

class ListingsPage extends Component {
  state = { searchQuery: "" };
  componentDidMount() {
    window.onscroll = function () {
      hideOnScroll();
    };
  }
  handleSearch = (childData) => {
    this.setState({ searchQuery: childData });
    const params = new URLSearchParams([["search", this.state.searchQuery]]);
    this.props.loadListings(params);
  };
  render() {
    return (
      <div className="listings-page">
        <MainNavbar />

        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />

        <SearchBar getSearchQuery={this.handleSearch} />

        <PopUpFilter />
        {this.state.params}
        {this.props.listings.map((listing) => (
          <div>{listing.title}</div>
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
