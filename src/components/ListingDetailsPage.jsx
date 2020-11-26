import React, { Component } from "react";
import { connect } from "react-redux";
import { loadListings } from "../store/listingSlice";
import MainNavbar from "./common/MainNavbar";
import four from "../image/four.jpg";
import { checkListingAvailability } from "../services/booking";

class ListingDetailsPage extends Component {
  state = { bookResult: "", bookResultColor: "" };
  async componentDidMount() {
    this.props.loadListings();
  }
  checkAvailability = async (event) => {
    const bookButton = document.querySelector(".send-book-request-button");
    const loadingIndicate = document.querySelector(
      ".book-request-notification"
    );
    event.preventDefault();
    loadingIndicate.style.display = "block";
    const booking = {
      listing: "5fb2cd7f9dfd864b20908482",
      checkIn: "2020-12-12",
      checkOut: "2020-12-14",
    };
    const isAvailable = await checkListingAvailability(booking);
    if (isAvailable) {
      bookButton.removeAttribute("disabled");
      this.setState({
        bookResult: "Listing is available, Book now!!",
        bookResultColor: "green",
      });
    } else {
      this.setState({
        bookResult: "Listing not available now",
        bookResultColor: "red",
      });
    }
    loadingIndicate.style.display = "none";
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

            <form onSubmit={this.checkAvailability}>
              <label htmlFor="checkIn">check In</label>
              <input type="date" name="checkIn" id="checkIn" />
              <label htmlFor="checkOut">check Out</label>
              <input type="date" name="checkOut" id="checkOut" />
              <input type="submit" value="Check Availability" />
            </form>

            <button className="send-book-request-button" disabled>
              Book
            </button>
            <small className="book-request-notification">
              checking...
              <span className="book-request-notification-spin"></span>
            </small>
            <small
              className="book-request-result"
              style={{ color: this.state.bookResultColor }}
            >
              {this.state.bookResult}
            </small>
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
