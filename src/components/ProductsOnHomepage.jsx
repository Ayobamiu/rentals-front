import React, { Component } from "react";
import { loadListings } from "../store/listingSlice";
import { connect } from "react-redux";
import PropertyList from "./common/PropertyList/PropertyList";

class ProductsOnHomepage extends Component {
  componentDidMount() {
    this.props.loadListings();
  }
  render() {
    const listings = this.props.listings;
    return (
      <div className="homepage-products">
        <h1 className="section-heading">Stays around you</h1>
        <PropertyList listings={listings} />
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

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ProductsOnHomepage);
