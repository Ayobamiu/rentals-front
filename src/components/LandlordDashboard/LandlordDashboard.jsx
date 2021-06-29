import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BackButton from "../common/BackButton/BackButton";
import "./css/style.css";

const LandlordDashboard = (props) => {
  const applications = [1, 2];
  const CustomSelect = ({ title, name, id }) => {
    return (
      <span>
        <input type="checkbox" name={name} id={id} className="hide-label" />
        <label htmlFor={id} className="btn secondary-button button-small mx-1">
          <span>{title}</span>
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
    );
  };

  return (
    <React.Fragment>
      <BackButton
        onClick={() => {
          props.history.goBack();
        }}
      />
      <div id="landlord-dashboard" className="container my-3">
        <div className="link-large">Applications</div>
        <div className="my-3 row">
          <div className="col-md-8 col-12">
            <div className="text-x-small row justify-content-between align-items-center">
              <span className="col"> New Apartment at lekki</span>
              <span className="link-medium text-end col">$455/Yr</span>
            </div>
            <span className="my-2 text-muted d-block">
              Screen and Accept the best Renter
            </span>
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
                Property Applications
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
                Tour Requests
              </span>
            </div>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {applications.map((item, index) => (
                    <div class="accordion-item">
                      <h2 class="accordion-header" id={`flush-heading${index}`}>
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${index}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${index}`}
                        >
                          <div>
                            <p className="text-small">
                              Bob Khan &nbsp;
                              <span className="status-text warning">
                                Pending
                              </span>
                            </p>
                            <p className="text-x-small"> Dec 1, 2020</p>
                          </div>
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${index}`}
                        class="accordion-collapse collapse"
                        aria-labelledby={`flush-heading${index}`}
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
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
                            <div className="col-6 link-small">
                              Marital Status
                            </div>
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
                          <div className="row justify-content-center">
                            <div className="col-auto my-2">
                              <div className="primary-button button-small">
                                Accept
                              </div>
                            </div>
                            <div className="col-auto my-2">
                              <button
                                data-bs-toggle="modal"
                                data-bs-target="#rejectRoomApplication"
                                className="secondary-button button-small"
                              >
                                Reject
                              </button>
                            </div>
                            <div className="col-auto my-2">
                              <div className="secondary-button button-small">
                                Send Message
                              </div>
                            </div>
                            <div className="col-auto my-2">
                              <div className="secondary-button button-small">
                                Request Bank Record
                              </div>
                            </div>
                          </div>
                          <p className="text-x-small mt-3 text-center text-muted">
                            By clicking Accept, you agree that your lease
                            Agreement be sent to Bob Khan for consent.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                {applications.map((item, index) => (
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 col-12">
                      <p className="text-small">
                        Bob Khan <span className="status-text">Approved</span>
                      </p>
                      <p className="text-x-small">
                        Schedule: Dec 1, 2021, 3:00pm
                      </p>
                    </div>
                    <div className="col-md-6 col-12 ">
                      <div className="d-flex end-start-900 my-3">
                        <button
                          className="secondary-button button-x-small mx-2"
                          data-bs-toggle="modal"
                          data-bs-target="#suggestNewTour"
                        >
                          Suggest Another Time
                        </button>
                        <button className="secondary-button button-x-small mx-2">
                          Cancel
                        </button>
                        <button className="primary-button button-x-small ">
                          Accept
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
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
              id="rejectRoomApplication"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="rejectRoomApplicationLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content ">
                  <div class="modal-body text-center">
                    <p className="text-x-small">New Apartment at lekki</p>
                    <small className="text-small">
                      Select the things you don't like about Bob khan's
                      application
                    </small>

                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                      <CustomSelect
                        name="reasonForRejecting"
                        id="one"
                        title="Total Income"
                      />
                      <CustomSelect
                        name="reasonForRejecting"
                        id="two"
                        title="Number Of Occupants"
                      />
                      <CustomSelect
                        name="reasonForRejecting"
                        id="three"
                        title="Occupation"
                      />
                      <CustomSelect
                        name="reasonForRejecting"
                        id="four"
                        title="Marital status"
                      />
                      <CustomSelect
                        name="reasonForRejecting"
                        id="five"
                        title="Move in Date"
                      />
                      <CustomSelect
                        name="reasonForRejecting"
                        id="six"
                        title="Credit History"
                      />
                    </div>

                    <p className="text-x-small my-2 text-center">
                      Your Feedbacks will help Bob Khan in their next
                      Application
                    </p>
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
                      class="btn primary-button button-small m-1"
                    >
                      Reject
                    </button>
                    <button
                      type="submit"
                      class="btn primary-button button-small m-1"
                    >
                      Reject with Feedbacks
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

export default LandlordDashboard;
