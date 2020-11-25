import React, { Component } from "react";
import { connect } from "react-redux";
import { loadListings } from "../store/listingSlice";
import MainNavbar from "./common/MainNavbar";
import four from "../image/four.jpg";

class ListingDetailsPage extends Component {
  componentDidMount() {
    this.props.loadListings();
  }
  checkAvailability = () => {
    console.log("Available");
  };
  render() {
    const listing = this.props.listings.filter(
      (listing) => listing._id === this.props.match.params.id
    )[0];
    return (
      <React.Fragment>
        <MainNavbar />
        {listing && (
          <div className="listing-details-page">
            <h1>{listing.title}</h1>
            <p>{listing.type}</p>
            <img src={four} width="70%" alt="" />
            <p>{listing.description}</p>

            <button onClick={this.checkAvailability}>Check Availability</button>
          </div>
        )}
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

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ListingDetailsPage);
