import React, { Component, useEffect } from "react";
import Footer from "../Footer";
import HomePageCallToAction from "../HomePageCallToAction";
import ProductsOnHomepage from "../ProductsOnHomepage";
import SuitedFor from "../SuitedFor";
import "./css/style.css";
import Cities from "../Cities";
import MainNavbar from "../NavBar/MainNavbar";
import { useDispatch, useSelector } from "react-redux";
import { changeListingInput, loadListings } from "../../store/listingSlice";
import PropertyList from "../common/PropertyList/PropertyList";
import { NavLink } from "react-router-dom";
import bgOne from "../../image/bgOne.png";

const Homepage = (props) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.app.listings.searchQuery);
  const listings = useSelector((state) => state.app.listings.list);
  useEffect(() => {
    dispatch(loadListings());
  }, []);

  const listingz = [
    { name: "Lagos", count: 18736 },
    { name: "Oyo", count: 18736 },
    { name: "Toronto", count: 18736 },
    { name: "Accra", count: 18736 },
    { name: "Tokyo", count: 18736 },
    { name: "Sau Paulo", count: 18736 },
    { name: "Guatamela", count: 18736 },
    { name: "Adis Ababa", count: 18736 },
    { name: "Anambra", count: 18736 },
    { name: "Ibada", count: 18736 },
    { name: "Denver", count: 18736 },
    { name: "Los Angeles", count: 18736 },
    { name: "Philadelphia", count: 18736 },
    { name: "Paris", count: 18736 },
    { name: "Enugu", count: 18736 },
    { name: "Kano", count: 18736 },
  ];

  return (
    <div>
      <MainNavbar />

      <section id="sectionOne" className="bg-white ">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <h1 className="display-medium-bold my-4 ">
                Search for Homes, screen tenants, sign lease and pay rents.
              </h1>
              <p className="text-medium ">
                Start search for a simplified renting experience.
              </p>
              <form
                action="search"
                className="p-2 rounded-pill bg-white d-flex justify-content-between border my-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  props.history.push("/search");
                }}
              >
                <input
                  type="text"
                  className=" w-100 border-0"
                  placeholder="Search cities, states and neighborhoods"
                  name="seachQuery"
                  defaultValue={searchQuery}
                  onChange={(e) => {
                    dispatch(changeListingInput("searchQuery", e.target.value));
                  }}
                />
                <input
                  type="submit"
                  value="Search"
                  className="primary-button button-small"
                />
              </form>
            </div>
            <div className="col-md-6 col-12"></div>
          </div>
        </div>
      </section>

      <section id="sectionTwo" className="bg-light py-5">
        <div className="container">
          <div className="d-flex justify-content-around align-items-center flex-wrap">
            <div className="item p-3 bg-white m-2">
              <h1 className=" display-small-bold">List available property</h1>
              <p className="text-small text-muted">
                Thousands od renters are searching.
              </p>
            </div>
            <div className="item p-3 bg-white m-2">
              <h1 className=" display-small-bold">Screen Renters</h1>
              <p className="text-small text-muted">Select the best tenants.</p>
            </div>
            <div className="item p-3 bg-white m-2">
              <h1 className=" display-small-bold">Sign Leases</h1>
              <p className="text-small text-muted">
                Sign Leases Electronnically. Easy.
              </p>
            </div>
            <div className="item p-3 bg-white m-2">
              <h1 className=" display-small-bold">Secure Rents payment</h1>
              <p className="text-small text-muted">
                Seamless secured payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sectionFour" className="bg-white  w-100 my-3 py-5">
        <div className="container">
          <h1 className="display-medium-bold mb-3">Top Stays</h1>
          <div className="row g-2">
            <div className="col-md-8 col-12">
              <NavLink
                to={`/listings/${listings[0] && listings[0]._id}`}
                className="item bg-secondary item-2 p-3 d-block"
              >
                <div>
                  <span className="badge bg-danger">New</span>&nbsp;&nbsp;
                  <span className="badge bg-success">For Rent</span>
                </div>
                <div className="title display-small text-white">
                  New Apartment in Lekki
                </div>
                <div className="title link-medium text-white">$4566/y</div>
              </NavLink>
            </div>
            <div className="col-md-4 col-12 d-flex flex-column justify-content-between">
              <NavLink
                to={`/listings/${listings[0] && listings[0]._id}`}
                className="item bg-secondary  p-2"
              >
                <div>
                  <span className="badge bg-danger">New</span>&nbsp;&nbsp;
                  <span className="badge bg-success">For Rent</span>
                </div>
                <div className="title text-small text-white">
                  New Apartment in Lekki
                </div>
                <div className="title link-small text-white">$4566/y</div>
              </NavLink>
              <NavLink
                to={`/listings/${listings[0] && listings[0]._id}`}
                className="item bg-secondary p-2"
              >
                <div>
                  <span className="badge bg-danger">New</span>&nbsp;&nbsp;
                  <span className="badge bg-success">For Rent</span>
                </div>
                <div className="title text-small text-white">
                  New Apartment in Lekki
                </div>
                <div className="title link-small text-white">$4566/y</div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section id="sectionThree" className="bg-white py-3 w-100">
        <div className="container">
          <h1 className="display-medium-bold mb-3">Cities</h1>
          <div className="d-flex flex-column flex-wrap">
            {listingz.map((item) => (
              <div
                className="item p-1 m-2 cursor"
                onClick={() => {
                  dispatch(changeListingInput("searchQuery", item.name));
                  props.history.push("/search");
                }}
              >
                <h1 className=" link-medium">{item.name}</h1>
                <p className="text-small text-muted">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
