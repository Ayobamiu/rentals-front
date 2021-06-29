import React from "react";
import { Link } from "react-router-dom";
import four from "../../../image/four.jpg";
import "./css/style.css";

const PropertyList = ({ listings }) => {
  return (
    <div className="listings-list my-2">
      {listings.map((listing) => (
        <Link
          to={`/listings/${listing._id}`}
          key={listing._id}
          className="listing-list-item m-3"
        >
          <div
            className="listing-list-item-image"
            style={{ backgroundImage: `url(${four})` }}
          >
            {/* <span className="info1"></span> */}
            {/* <span className="info2"></span> */}
          </div>
          <div className="listing-list-item-detail mt-3">
            <h2>{listing.title}</h2>
            <p>
              <strong>${listing.price}</strong>/ night
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PropertyList;
