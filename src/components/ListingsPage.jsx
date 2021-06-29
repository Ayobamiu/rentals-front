import React, { Component } from "react";
import { connect } from "react-redux";
import { hideOnScroll } from "../services/showAndHides";
import MainNavbar from "./NavBar/MainNavbar";
import { loadListings } from "../store/listingSlice";
import SearchBar from "./common/SearchBar";
import PropertyList from "./common/PropertyList/PropertyList";

class ListingsPage extends Component {
  state = { inc: {} };
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
      <React.Fragment>
        <MainNavbar />
        <div className="listings-page">
          <SearchBar getSearchQuery={this.handleSearch} />
          <PropertyList listings={this.props.listings} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  listings: state.app.listings.list,
});

const matchDispatchToProps = (dispatch) => ({
  loadListings: (params) => dispatch(loadListings(params)),
});

export default connect(mapStateToProps, matchDispatchToProps)(ListingsPage);
