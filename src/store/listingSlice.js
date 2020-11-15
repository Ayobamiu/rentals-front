import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "listings",
  initialState: [],
  reducers: {
    listingAdded: (listings, action) => {
      listings.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { listingAdded } = slice.actions;

export default slice.reducer;
