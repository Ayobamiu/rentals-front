import React from "react";
import BackButton from "../common/BackButton/BackButton";
import "./css/style.css";
import proposal from "../../assets/PDFs/GuestHouse_Agreement_Usman_Ayobami.pdf";
import { Link } from "react-router-dom";

const SignLeaseAgreement = (props) => {
  const applications = [1, 2];
  return (
    <React.Fragment>
      <BackButton
        onClick={() => {
          props.history.goBack();
        }}
      />
      <div id="landlord-dashboard" className="container my-5">
        <div className="link-large">Sign Lease Agreement</div>
        <div className="my-3 row">
          <div className="col-md-8 col-12">
            <div className="text-x-small row justify-content-between align-items-center">
              <span className="col"> New Apartment at lekki</span>
              <span className="link-medium text-end col">$455/Yr</span>
            </div>

            <br />
            <p>Lease Agreement Document</p>
            <embed src={proposal} width="100%" height="1000px" />
          </div>
          <div className="col-md-4 col-12">
            <div className="action-card p-4 my-3">
              <h1 className="display-small">Take an Action</h1>
              <div class="mb-3">
                <label for="salutation" class="form-label">
                  Salutation
                </label>
                <select
                  required
                  type="text"
                  class="form-control"
                  id="salutation"
                >
                  <option value="mr">Mr.</option>
                  <option value="miss">Miss.</option>
                  <option value="mrs">Mrs.</option>
                </select>
              </div>
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
              <div className="my-2">
                <input type="checkbox" name="agree" id="agree" /> &nbsp;
                <span className="text-x-small">
                  I have read and understood the Agreement terms for the
                  property
                </span>
              </div>
              <p className="text-x-small my-3 text-muted ">
                Signing this Lease digitally has the same Legal ground as a
                lease signed with a pen on paper
              </p>
              <button className="primary-button button-small">
                Agree and Continue
              </button>
              <button className="secondary-button button-small mt-2">
                I don't like the Lease terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignLeaseAgreement;
