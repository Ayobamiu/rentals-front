import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../common/BackButton/BackButton";
import "./css/style.css";

const RenterSinglePropertyDetail = (props) => {
  return (
    <React.Fragment>
      <BackButton
        onClick={() => {
          props.history.goBack();
        }}
      />
      <div id="landlord-dashboard" className="container my-3">
        <div className="link-large">Application Updates</div>
        <div className="my-3 row">
          <div className="col-md-8 col-12">
            <div className="text-x-small row justify-content-between align-items-center">
              <span className="col"> New Apartment at lekki</span>
              <span className="link-medium text-end col">$455/Yr</span>
            </div>

            <div className="my-3 nav" id="nav-tab" role="tablist">
              <span
                class="link-small active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Rent Request
              </span>
              <span>&nbsp; | &nbsp;</span>
              <span
                class="link-small"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Tour Request
              </span>
            </div>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div>
                  <p className="text-small">
                    Bob Khan &nbsp;
                    <span className="status-text warning">Pending</span>
                  </p>
                  <p className="text-x-small"> Dec 1, 2020</p>
                </div>

                <div className="row my-2 align-items-center">
                  <div className="col-6 link-small">Total Income</div>
                  <div className="col-6 text-end">$167/month</div>
                </div>
                <div className="row my-2 align-items-center">
                  <div className="col-6 link-small">Email</div>
                  <div className="col-6 text-end">bob@khan.com</div>
                </div>
                <div className="row my-2 align-items-center">
                  <div className="col-6 link-small">Phone</div>
                  <div className="col-6 text-end">08033335555</div>
                </div>
                <div className="row my-2 align-items-center">
                  <div className="col-6 link-small">Occupation</div>
                  <div className="col-6 text-end">Sales Director</div>
                </div>
                <div className="row my-2 align-items-center">
                  <div className="col-6 link-small">Marital Status</div>
                  <div className="col-6 text-end">Single</div>
                </div>
                <div className="row my-2 align-items-center">
                  <div className="col-6 link-small">Move In Date</div>
                  <div className="col-6 text-end">06-15-2021</div>
                </div>
                <div className="row my-2 align-items-center">
                  <div className="col-6 link-small">Occupants</div>
                  <div className="col-6 text-end">3</div>
                </div>

                <p className="text-x-small text-muted">
                  When Application is Accepted
                </p>
                <div className="row justify-content-start">
                  <div className="col-auto my-2">
                    <Link
                      to="/sign-lease"
                      className="primary-button button-small"
                    >
                      Proceed to Sign Lease
                    </Link>
                  </div>
                </div>

                <hr />
                <p className="text-x-small text-muted">
                  When Application is Rejected
                </p>
                <div className="card border rounded my-3">
                  <div className="card-body">
                    <p className="link-medium">Landlord's Note for Rejecting</p>
                    <p className="text-x-small">
                      Your Application was Rejected because of the following;{" "}
                      <span className="link-x-small">Total Income, </span>
                      <span className="link-x-small">Occupation, </span>
                      <span className="link-x-small">
                        Number Of Occupants,{" "}
                      </span>
                      <span className="link-x-small">Marital status, </span>
                      <span className="link-x-small">Credit History, </span>
                      <span className="link-x-small">Move in Date. </span>
                    </p>
                  </div>
                </div>
                <div className="row justify-content-start">
                  <div className="col-auto my-2">
                    <div className="primary-button button-small">
                      Chat landlord
                    </div>
                  </div>
                  <div className="col-auto my-2">
                    <Link to="/" className="secondary-button button-small">
                      Search other Listings
                    </Link>
                  </div>
                </div>

                <hr />
                <p className="text-x-small text-muted">
                  When landlord request for bank record
                </p>
                <div className="card border rounded my-3">
                  <div className="card-body">
                    <p className="link-small">Landlord's Request</p>
                    <p className="text-x-small">
                      Your Landlord has requested to see your recent Bank
                      records
                    </p>
                    <p className="text-x-small text-muted">
                      Click Proceed and follow our secured steps to share your
                      record.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-start">
                  <div className="col-auto my-2">
                    <div
                      className="primary-button button-small"
                      data-bs-toggle="modal"
                      data-bs-target="#rejectBankRecordRequest"
                    >
                      Cancel
                    </div>
                  </div>

                  <div className="col-auto my-2">
                    <div className="secondary-button button-small">
                      Proceed to share Bank Record
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="">
                  <p className="text-small">
                    Bob Khan <span className="status-text">Approved</span>
                  </p>
                  <p className="text-x-small">Schedule: Dec 1, 2021, 3:00pm</p>

                  <p className="text-x-small text-muted">
                    When request is Accepted
                  </p>
                  <div className="card border rounded">
                    <div className="card-body">
                      <div className="text-x-small">
                        Your tour for{" "}
                        <span className="link-x-small">
                          New Apartment at lekki
                        </span>{" "}
                        with the landlord has been scheduled for 15th, December
                        2021 at 5:00pm.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex  my-3">
                    <button
                      className="secondary-button button-x-small "
                      data-bs-toggle="modal"
                      data-bs-target="#rejectScheduledTour"
                    >
                      Cancel Schedule
                    </button>
                  </div>
                  <hr />
                  <p className="text-x-small text-muted my-3">
                    When paid tour request is Accepted
                  </p>
                  <div className="card border rounded">
                    <div className="card-body">
                      <div className="text-x-small">
                        Your tour for{" "}
                        <span className="link-x-small">
                          New Apartment at lekki
                        </span>{" "}
                        with the landlord has been scheduled for 15th, December
                        2021 at 5:00pm.
                        <p className="text-muted">
                          Proceed to make payment for the tour
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex  my-3">
                    <button
                      className="secondary-button button-x-small "
                      data-bs-toggle="modal"
                      data-bs-target="#rejectScheduledTour"
                    >
                      Cancel Schedule
                    </button>
                    <button className="primary-button button-x-small mx-2">
                      Make payment
                    </button>
                  </div>
                  <hr />
                  <p className="text-x-small text-muted">
                    When is tour request is rejected
                  </p>
                  <div className="card border rounded my-3">
                    <div className="card-body">
                      <p className="link-medium">
                        Landlord's Note for Rejecting
                      </p>
                      <p className="text-x-small">
                        Your Application was Rejected because of the following;{" "}
                        <span className="link-x-small">Total Income, </span>
                        <span className="link-x-small">Occupation, </span>
                        <span className="link-x-small">
                          Number Of Occupants,{" "}
                        </span>
                        <span className="link-x-small">Marital status, </span>
                        <span className="link-x-small">Credit History, </span>
                        <span className="link-x-small">Move in Date. </span>
                      </p>
                    </div>
                  </div>

                  <hr />
                  <p className="text-x-small text-muted">
                    When Landlord suggests new Schedule
                  </p>
                  <div className="card border rounded">
                    <div className="card-body">
                      <div className="text-x-small">
                        The landlord suggest that you re-scheduled for 15th,
                        December 2021 at 5:00pm to tour{" "}
                        <span className="link-x-small">
                          New Apartment at lekki
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex  my-3">
                    <button
                      className="secondary-button button-x-small "
                      data-bs-toggle="modal"
                      data-bs-target="#rejectScheduledTour"
                    >
                      Cancel Schedule
                    </button>
                    <button className="primary-button button-x-small mx-2">
                      Accept{" "}
                    </button>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Submitted");
            }}
          >
            <div
              class="modal fade"
              id="rejectScheduledTour"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="rejectScheduledTourLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content ">
                  <div class="modal-body text-center">
                    <small className="text-small">
                      Why are you cancelling your scheduled Tour?
                    </small>

                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                      <span>
                        <input
                          type="checkbox"
                          name="reasonForRejecting"
                          id="one"
                          className="hide-label"
                        />
                        <label
                          htmlFor="one"
                          className="btn secondary-button button-small mx-1"
                        >
                          <span>I am busy</span>
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="selection-button-plus mx-3"
                          />
                          <FontAwesomeIcon
                            icon={faMinus}
                            className="selection-button-minus mx-3"
                          />
                        </label>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="reasonForRejecting"
                          id="two"
                          className="hide-label"
                        />
                        <label
                          htmlFor="two"
                          className="btn secondary-button button-small mx-1"
                        >
                          <span>I can't afford to pay</span>
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="selection-button-plus mx-3"
                          />
                          <FontAwesomeIcon
                            icon={faMinus}
                            className="selection-button-minus mx-3"
                          />
                        </label>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="reasonForRejecting"
                          id="three"
                          className="hide-label"
                        />
                        <label
                          htmlFor="three"
                          className="btn secondary-button button-small mx-1"
                        >
                          <span>I don't feel secure</span>
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="selection-button-plus mx-3"
                          />
                          <FontAwesomeIcon
                            icon={faMinus}
                            className="selection-button-minus mx-3"
                          />
                        </label>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="reasonForRejecting"
                          id="six"
                          className="hide-label"
                        />
                        <label
                          htmlFor="six"
                          className="btn secondary-button button-small mx-1"
                        >
                          <span>Not interested in the Property</span>
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="selection-button-plus mx-3"
                          />
                          <FontAwesomeIcon
                            icon={faMinus}
                            className="selection-button-minus mx-3"
                          />
                        </label>
                      </span>
                    </div>
                  </div>
                  <div class="modal-footer justify-content-center">
                    <button
                      type="button"
                      class="btn secondary-button button-small m-1"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      class="btn secondary-button button-small m-1"
                    >
                      Cancel without Feedbacks
                    </button>
                    <button
                      type="submit"
                      class="btn primary-button button-small m-1"
                    >
                      Cancel with Feedbacks
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
              id="rejectBankRecordRequest"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="rejectBankRecordRequestLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content ">
                  <div class="modal-body text-center">
                    <small className="text-small">
                      Why are you rejecting the Bank record request?
                    </small>

                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                      <span>
                        <input
                          type="checkbox"
                          name="reasonForRejecting"
                          id="two"
                          className="hide-label"
                        />
                        <label
                          htmlFor="two"
                          className="btn secondary-button button-small mx-1"
                        >
                          <span>My Bank record is not a fit</span>
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="selection-button-plus mx-3"
                          />
                          <FontAwesomeIcon
                            icon={faMinus}
                            className="selection-button-minus mx-3"
                          />
                        </label>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="reasonForRejecting"
                          id="three"
                          className="hide-label"
                        />
                        <label
                          htmlFor="three"
                          className="btn secondary-button button-small mx-1"
                        >
                          <span>I don't feel secure</span>
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="selection-button-plus mx-3"
                          />
                          <FontAwesomeIcon
                            icon={faMinus}
                            className="selection-button-minus mx-3"
                          />
                        </label>
                      </span>
                      <span>
                        <input
                          type="checkbox"
                          name="reasonForRejecting"
                          id="six"
                          className="hide-label"
                        />
                        <label
                          htmlFor="six"
                          className="btn secondary-button button-small mx-1"
                        >
                          <span>Not interested in the Property</span>
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="selection-button-plus mx-3"
                          />
                          <FontAwesomeIcon
                            icon={faMinus}
                            className="selection-button-minus mx-3"
                          />
                        </label>
                      </span>
                    </div>
                  </div>
                  <div class="modal-footer justify-content-center">
                    <button
                      type="button"
                      class="btn secondary-button button-small m-1"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      class="btn secondary-button button-small m-1"
                    >
                      Cancel without Feedbacks
                    </button>
                    <button
                      type="submit"
                      class="btn primary-button button-small m-1"
                    >
                      Cancel with Feedbacks
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
              id="suggestNewTour"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="suggestNewTourLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content ">
                  <div class="modal-body text-center">
                    <p className="text-x-small">New Apartment at lekki</p>
                    <small className="text-small">
                      Suggest New Tour Schedule
                    </small>

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
                    <p className="text-x-small my-2 text-center">
                      By sending, you are asking Bob Khan to reschedule.
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn secondary-button button-small"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      class="btn primary-button button-small"
                    >
                      Reschedule
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RenterSinglePropertyDetail;
