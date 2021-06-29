import React, { Component } from "react";
import { connect } from "react-redux";
import { loadListings } from "../../store/listingSlice";
import MainNavbar from "../NavBar/MainNavbar";
import four from "../../image/four.jpg";
import { addBooking, checkListingAvailability } from "../../services/booking";
import { getLoggedInUser } from "../../store/authSlice";
import "./css/style.css";
import BackButton from "../common/BackButton/BackButton";
import { Link } from "react-router-dom";

class ListingDetailsPage extends Component {
  state = {
    bookResult: "",
    bookResultColor: "",
    booking: {},
    isAvailable: false,
  };
  componentDidMount() {
    this.props.loadListings();
  }

  handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    const booking = this.state.booking;
    booking[name] = value;
    this.setState({ booking });
  };
  checkAvailability = async (event) => {
    event.preventDefault();
    const bookButton = document.getElementById("send-book-request-button");
    const loadingIndicate = document.querySelector(
      ".book-request-notification"
    );

    loadingIndicate.style.display = "block";
    const booking = {
      listing: this.props.match.params.id,
      checkIn: this.state.booking.checkIn,
      checkOut: this.state.booking.checkOut,
    };
    const isAvailable = await checkListingAvailability(booking);
    if (isAvailable) {
      bookButton.removeAttribute("disabled");
      this.setState({
        bookResult: "Listing is available, Book now!!",
        bookResultColor: "green",
        isAvailable,
      });
    } else {
      this.setState({
        bookResult: "Listing not available for this period",
        bookResultColor: "red",
      });
    }
    loadingIndicate.style.display = "none";
  };
  handleAddBooking = async () => {
    const loadingIndicate = document.querySelector(
      ".book-request-notification"
    );
    const result = await addBooking({
      listing: this.props.match.params.id,
      owner: getLoggedInUser()._id,
      checkIn: this.state.booking.checkIn,
      checkOut: this.state.booking.checkOut,
    });
    console.log(result.status);
    if (result.status === "requestSent") {
      this.setState({
        bookResult: "Book request has been sent to Host. You will be contacted",
        bookResultColor: "blue",
      });
    } else if (result.status === "requestGrantedByHost") {
      this.setState({
        bookResult:
          "Book request has been granted. Wait, we are making payment possible!",
        bookResultColor: "blue",
      });
      loadingIndicate.style.display = "block";
      setTimeout(() => {
        loadingIndicate.style.display = "none";
        window.location = "/pay";
      }, 7000);
    }
  };
  render() {
    const listing = this.props.listings.filter(
      (listing) => listing._id === this.props.match.params.id
    )[0];
    console.log(this.props);
    return (
      <React.Fragment>
        {/* <MainNavbar /> */}
        <BackButton
          onClick={() => {
            this.props.history.goBack();
          }}
        />

        {listing && (
          <div className="listing-details-page container my-3">
            <h1 className="section-heading">
              {listing.location || "Lekki 99-4"}
            </h1>
            <p className="lead">{listing.type}</p>
            <div className="row">
              <div className="col-md-8 col-12 my-3">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div
                      class="carousel-item active listing-details-page-image"
                      style={{ backgroundImage: `url(${four})` }}
                    ></div>
                    <div
                      class="carousel-item listing-details-page-image"
                      style={{ backgroundImage: `url(${four})` }}
                    ></div>
                    <div
                      class="carousel-item listing-details-page-image"
                      style={{ backgroundImage: `url(${four})` }}
                    ></div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

                <div className="row align-items-center justify-content-between my-3">
                  <div className="col-auto">
                    <h1 className="display-small">{listing.title}</h1>
                    <p className="text-small">
                      4 guests · 1 bedroom · 1 bed · 1 bath
                    </p>
                  </div>
                  <div className="col-auto text-end">
                    <div className="avatar">ad</div>
                  </div>
                </div>
                <hr />
              </div>

              <div className="col-md-4 col-12">
                <div className="action-card p-2 my-3">
                  <h1 className="text-medium text-center">Take an Action</h1>
                  <div className=" d-flex flex-wrap  justify-content-center">
                    <button
                      className="primary-button m-2"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Apply
                    </button>
                    <button
                      className="primary-button m-2"
                      data-bs-toggle="modal"
                      data-bs-target="#tourRequestForm"
                    >
                      Request tour
                    </button>
                    <Link
                      className="secondary-button m-2"
                      to="/landlord-dashboard"
                    >
                      Save to List
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Submitted");
          }}
        >
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content ">
                <div class="modal-body">
                  <div className="display-small text-capitalize">
                    {listing.title}
                  </div>
                  <p className="text-small">Application Form</p>
                  <div class="mb-3">
                    <label for="fullName" class="form-label">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="fullName"
                      placeholder="Full Name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="dob" class="form-label">
                      Date of Birth
                    </label>
                    <input
                      required
                      type="date"
                      class="form-control"
                      id="dob"
                      placeholder="Date of Birth"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="occupation" class="form-label">
                      Occupation
                    </label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="occupation"
                      placeholder="Occupation"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Email Address"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="phone" class="form-label">
                      Phone
                    </label>
                    <input
                      required
                      type="phone"
                      class="form-control"
                      id="phone"
                      placeholder="Phone"
                    />
                  </div>
                  <label for="income" class="form-label">
                    Income per Month
                  </label>
                  <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <input
                      required
                      type="number"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text">.00</span>
                  </div>
                  <div class="mb-3">
                    <label for="moveInDate" class="form-label">
                      Marital status
                    </label>

                    <select
                      name="maritalStatus"
                      id="maritalStatus"
                      className="form-control"
                    >
                      <option value="0" selected>
                        Single
                      </option>
                      <option value="1">Married</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="moveInDate" class="form-label">
                      Move In Date
                    </label>
                    <input
                      required
                      type="date"
                      class="form-control"
                      id="moveInDate"
                      placeholder="Move In Date"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="noOfOccupants" class="form-label">
                      Number of Occupants
                    </label>
                    <input
                      required
                      type="number"
                      class="form-control"
                      id="noOfOccupants"
                      placeholder="Number of Occupants"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn secondary-button button-medium"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn primary-button button-small">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Submitted");
          }}
        >
          <div
            class="modal fade"
            id="tourRequestForm"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="tourRequestFormLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content ">
                <div class="modal-body">
                  <div className="row">
                    <div className="col-10">
                      <div className="display-small text-truncate text-capitalize">
                        {listing.title}
                      </div>
                      <p className="text-small">Tour Request Form</p>
                    </div>
                    <div className="col-2 text-end display-small">$44</div>
                  </div>
                  <div class="mb-3">
                    <label for="date" class="form-label">
                      Date to tour
                    </label>
                    <input
                      required
                      type="date"
                      class="form-control"
                      id="date"
                      placeholder="Date to tour"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="time" class="form-label">
                      Time to tour
                    </label>
                    <input
                      required
                      type="time"
                      class="form-control"
                      id="time"
                      placeholder="Time to tour"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="touristName" class="form-label">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="touristName"
                      placeholder="Full Name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="touristEmail" class="form-label">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      class="form-control"
                      id="touristEmail"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="touristPhone" class="form-label">
                      Phone
                    </label>
                    <input
                      required
                      type="phone"
                      class="form-control"
                      id="touristPhone"
                      placeholder="Phone "
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn secondary-button button-small"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn primary-button button-small">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
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
