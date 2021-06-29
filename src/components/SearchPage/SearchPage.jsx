import React, { useEffect } from "react";
import MainNavbar from "../NavBar/MainNavbar";
import "./css/style.css";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useDispatch, useSelector } from "react-redux";
import { changeListingInput, loadListings } from "../../store/listingSlice";
import PropertyList from "../common/PropertyList/PropertyList";

const SearchPage = (props) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.app.listings.searchQuery);
  const listings = useSelector((state) => state.app.listings.list);
  const min = useSelector((state) => state.app.listings.min);
  const max = useSelector((state) => state.app.listings.max);

  useEffect(() => {
    dispatch(loadListings());
  }, []);
  return (
    <div id="searchpage">
      <MainNavbar />

      <div className="container">
        <form
          action="search"
          className=" bg-white d-flex justify-content-between align-items-center my-3 w-100 p-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className=" w-100 border border-light p-2 rounded-pill  mx-2 my-2-900"
            placeholder="Search cities, states and neighborhoods"
            name="seachQuery"
            defaultValue={searchQuery}
            onChange={(e) => {
              dispatch(changeListingInput("searchQuery", e.target.value));
            }}
          />
          <select
            name="type"
            id="type"
            className="border border-light p-2 rounded-pill  mx-2 my-2-900"
          >
            <option value="condo">Condo</option>
            <option value="duplex">Duplex</option>
          </select>

          <div className=" p-2  mx-2 my-2-900 d-flex justify-content-between align-items-center ">
            <span>from</span>
            <select
              name="min"
              id="min"
              className="border border-light p-2 rounded-pill  mx-2 my-2-900"
              defaultValue={min}
            >
              <option selected>{min}</option>
              <option value="0">0</option>
              <option value="100">100</option>
            </select>
            <span>to</span>
            <select
              name="max"
              id="max"
              className="border border-light p-2 rounded-pill  mx-2 my-2-900"
              defaultValue={max}
            >
              <option selected>{max}</option>
              <option value="1000000">1000000</option>
              <option value="10000000">10000000</option>
            </select>
          </div>
          <input
            type="submit"
            value="Search"
            className="primary-button button-small  mx-2 my-2-900"
          />
        </form>

        <div className="listing-results">
          <div className="d-flex justify-content-between flex-wrap">
            <h1 className="text-small text-truncate">
              Chicago IL Real Estate & Homes For Sale
            </h1>
            <div className="d-flex align-items-center">
              <span> Sort by: </span>
              <select
                name="type"
                id="type"
                className="border border-light p-2 rounded-pill  mx-2 my-2-900"
              >
                <option value="newest">newest</option>
                <option value="desc">Price (Low to High) </option>
                <option value="asc">Price (Low to High) </option>
              </select>
            </div>
          </div>

          <PropertyList listings={listings} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
{
  /* <InputRange
              maxValue={20000}
              minValue={0}
              value={{ min, max }}
              onChange={(value) => {
                dispatch(changeListingInput("min", value.min));
                dispatch(changeListingInput("max", value.max));
              }}
              formatLabel={(value) => `$ ${value}`}
              onChangeComplete={(values) => {
                dispatch(changeListingInput("min", values.min));
                dispatch(changeListingInput("max", values.max));
              }}
            /> */
}
