import React, { Component } from "react";
import one from "../image/one.jpg";
import two from "../image/two.jpg";
import three from "../image/three.jpg";

class ProductsOnHomepage extends Component {
  state = {
    listings: [
      {
        id: 1,
        price: 400,
        per: "night",
        location: "Lagos, Lekki",
        title: "Penthouse uptown Lekki",
        image: one,
      },
      {
        id: 2,
        price: 250,
        per: "night",
        location: "Abuja",
        title: "Couples standard two rooms",
        image: two,
      },
      {
        id: 3,
        price: 100,
        per: "night",
        location: "Abuja, Garki",
        title: "Nice suite for students",
        image: three,
      },
      {
        id: 4,
        price: 80,
        per: "night",
        location: "Ibadan",
        title: "Hotel bouqoute",
        image: two,
      },
      {
        id: 5,
        price: 300,
        per: "night",
        location: "Abuja",
        title: "Duplex in winscosin",
        image: one,
      },
    ],
  };
  render() {
    return (
      <div className="homepage-products">
        <h1 className="light-heading">Stays around you</h1>
        <div className="homepage-products-list">
          {this.state.listings.map((listing) => (
            <div key={listing.id} className="homepage-products-item">
              <div className="homepage-products-item-image">
                <img
                  src={listing.image}
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
                  $ {listing.price}/ {listing.per}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsOnHomepage;
