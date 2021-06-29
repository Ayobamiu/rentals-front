import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import memoize from "lodash.memoize";

const slice = createSlice({
  name: "listings",
  initialState: { list: [], searchQuery: "", min: 1000, max: 10000 },

  reducers: {
    changeInput: (listings, action) => {
      listings[action.payload.name] = action.payload.value;
    },
    listingsRequested: (listings, action) => {
      listings.loading = true;
    },
    listingsReceived: (listings, action) => {
      listings.list = action.payload;
      listings.loading = false;
    },
    listingsRequestFailed: (listings, action) => {
      listings.loading = false;
    },
    listingAddStart: (listings, action) => {
      listings.loading = true;
      listings.status = "loading";
    },
    listingAdded: (listings, action) => {
      listings.list.push(action.payload);
      listings.loading = false;
      listings.status = "Added successfully";
    },
    listingAddFailed: (listings, action) => {
      listings.loading = false;
      listings.status = "Failed";
    },
    listingRemoved: (listings, action) => {
      listings.list.pop((listing) => listing._id !== action.payload._id);
    },
  },
});

export const {
  listingAdded,
  listingsRequested,
  listingsReceived,
  listingsRequestFailed,
  listingAddStart,
  listingAddFailed,
  listingRemoved,
  changeInput,
} = slice.actions;

export default slice.reducer;

//Action creators
export const changeListingInput = (name, value) => (dispatch) => {
  dispatch({ type: changeInput, payload: { name, value } });
};
export const loadListings = (params) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: "/listings",
      params: params,
      onStart: listingsRequested.type,
      onSuccess: listingsReceived.type,
      onError: listingsRequestFailed.type,
    })
  );
};

export const addListing = (listing) =>
  apiCallBegan({
    url: "/listings",
    method: "post",
    data: listing,
    onSuccess: listingAdded.type,
    onError: listingAddFailed.type,
  });

export const removeListing = (id) =>
  apiCallBegan({
    url: "/listings/" + id,
    method: "delete",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authToken"),
    },
    onSuccess: listingRemoved.type,
  });
