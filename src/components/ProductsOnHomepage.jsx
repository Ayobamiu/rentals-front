import React, { Component } from "react";
import one from "../image/one.jpg";
import two from "../image/two.jpg";
import three from "../image/three.jpg";
import { loadListings } from "../store/listingSlice";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ProductsOnHomepage extends Component {
  componentDidMount() {
    this.props.loadListings();
  }
  render() {
    const listings = this.props.listings;
    return (
      <div className="homepage-products">
        <h1 className="light-heading">Stays around you</h1>
        <div className="homepage-products-list">
          {listings.map((listing) => (
            <Link
              to={`/listings/${listing._id}`}
              key={listing._id}
              className="homepage-products-item"
            >
              <div className="homepage-products-item-image">
                <img
                  src={one}
                  alt=""
                  className="homepage-products-item-image-img"
                />
              </div>
              <div className="homepage-products-item-text">
                <div className="homepage-products-item-text-title">
                  {listing.title}
                </div>
                <div className="homepage-products-item-text-title">
                  <i className="fa fa-map-marker"></i>
                  <span className="homepage-products-item-text-location">
                    {listing.location}
                  </span>
                </div>
                <div className="homepage-products-item-text-price">
                  $ {listing.price}/ night
                </div>
              </div>
            </Link>
          ))}
        </div>
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
