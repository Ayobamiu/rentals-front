import React, { Component } from "react";
import { connect } from "react-redux";
import { gotoListingPage } from "../../services/showAndHides";
import { loadListings } from "../../store/listingSlice";

class SearchBar extends Component {
  state = {};

  sendSerchQuery = (event) => {
    event.preventDefault();
    this.props.getSearchQuery(event.target.search.value);
  };
  render() {
    return (
      <div className="homepage-main-message-search" id="homepageSearch">
        <form
          className="main-navbar__search-search"
          onSubmit={this.sendSerchQuery}
        >
          <i className="fa fa-search main-navbar__search-icon"></i>
          <input
            type="search"
            name="search" 
            className="main-navbar__search-input"
            placeholder="Where on Earth?"
            onFocus={gotoListingPage}
          />
          <input
            type="submit"
            value="Search"
            className="main-navbar__search-button"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listings: state.app.listings.list,
});

const matchDispatchToProps = (dispatch) => ({
  loadListings: (params) => dispatch(loadListings(params)),
});

export default connect(mapStateToProps, matchDispatchToProps)(SearchBar);
