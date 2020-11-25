import React, { Component } from "react";
import { connect } from "react-redux";
import { hideOnScroll } from "../services/showAndHides";
import MainNavbar from "./common/MainNavbar";
import { loadListings } from "../store/listingSlice";
import SearchBar from "./common/SearchBar";
import four from "../image/four.jpg";
import PopUpFilter from "./common/PopUpFilter";
import { Link } from "react-router-dom";

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
      <React.Fragment>
        <MainNavbar />
        <div className="listings-page">
          <SearchBar getSearchQuery={this.handleSearch} />
          {/* <PopUpFilter /> */}
          <div className="listings-list">
            {this.props.listings.map((listing) => (
              <Link
                to={`/listings/${listing._id}`} 
                key={listing._id}
                className="listing-list-item"
              >
                <div className="listing-list-item-image">
                  <img src={four} height="100%" alt="" />
                </div>
                <div className="listing-list-item-detail">
                  <p>
                    {listing.type} | {listing.type}
                  </p>
                  <p>{listing.title}</p>
                  <p>
                    <strong>${listing.price}</strong>/ night
                  </p>
                </div>
              </Link>
            ))}
          </div>
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
