import {
  faAngleDoubleRight,
  faEdit,
  faPen,
  faPenAlt,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Route, useRouteMatch } from "react-router-dom";
import { loadListings } from "../../store/listingSlice";
import "./css/style.css";

const DashBoard = (props) => {
  const { path, url } = useRouteMatch();
  const listings = useSelector((state) => state.app.listings.list);
  const lisst = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadListings());
  }, []);
  return (
    <div id="dashBoard">
      <aside className="bg-dark hide-900">
        <NavLink to="/" className="mx-3 link-medium text-white">
          Home
        </NavLink>
        <NavLink
          to={`${url}/listings`}
          className="mx-3 d-block link-small text-white"
        >
          Listings
        </NavLink>
        <NavLink
          to={`${url}/rents`}
          className="mx-3 d-block link-small text-white"
        >
          Rents
        </NavLink>
        <NavLink
          to={`${url}/requests`}
          className="mx-3 d-block link-small text-white"
        >
          Request
        </NavLink>
        <NavLink
          to={`${url}/moneys`}
          className="mx-3 d-block link-small text-white"
        >
          Moneys
        </NavLink>
      </aside>
      <main className="container">
        <Route path={`${url}/listings`}>
          <div class="list-group container">
            <h4 className="display-small my-4">Listings</h4>
            {listings.map((listing) => (
              <div class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{listing.title}</h5>
                  <small class="text-muted">${listing.price}/y</small>
                </div>
                <p class="mb-1">{listing.description}</p>
                <div className="d-flex justify-content-between">
                  <div>
                    <NavLink to="/landlord-dashboard">
                      <span class="badge bg-primary rounded-pill m-1">
                        14 Applications
                      </span>
                    </NavLink>
                    <NavLink to="/landlord-dashboard">
                      <span class="badge bg-info rounded-pill m-1">
                        14 Tour Requests
                      </span>
                    </NavLink>
                    <NavLink to="/landlord-dashboard">
                      <span class="badge bg-danger rounded-pill m-1">
                        Actions Required
                      </span>
                    </NavLink>
                  </div>
                  <div className="go-back-button">
                    <FontAwesomeIcon icon={faPen} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Route>
        <Route path={`${url}/moneys`}>moneys</Route>
        <Route path={`${url}/rents`}>
          <div className="container">
            <h1 className="display-small my-4">Rents</h1>
            <ul class="list-group container">
              <caption>List of Renters</caption>
              {lisst.map((item) => (
                <li class="list-group-item d-flex row align-items-center justify-content-between">
                  <NavLink
                    to="/customer-payment-history"
                    className="link-x-small col-md-3 col-12 text-truncate"
                  >
                    Propety's Title
                  </NavLink>
                  <span className="d-block my-1 col-md-3 col-12 text-truncate">
                    Renter's Name
                  </span>
                  <span className="d-block my-1 col-md-3 col-12">Due : 15 Dec, 2021</span>
                  <button className="primary-button button-x-small col-auto">
                    Send Reminder
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Route>
        <Route path={`${url}/requests`}>
          <div className="container">
            <h1 className="display-small my-4">Requests</h1>
            <ul class="list-group container">
              <caption>List of Requests</caption>
              {lisst.map((item) => (
                <li class="list-group-item d-flex row align-items-center justify-content-between">
                  <NavLink
                    to="/customer-payment-history"
                    className="link-x-small col-md-3 col-auto text-truncate"
                  >
                    Propety's Title Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Labore, sequi?
                  </NavLink>

                  <span className="status-text warning d-block my-1 col-md-3 col-auto">
                    Pending
                  </span>
                  <span className="col-auto">
                    <NavLink
                      to={`/renter-request/dhodipdojie`}
                      className="link-x-small "
                    >
                      See details{" "}
                      <FontAwesomeIcon
                        icon={faAngleDoubleRight}
                        className="mx-2"
                      />
                    </NavLink>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Route>
      </main>
    </div>
  );
};

export default DashBoard;
