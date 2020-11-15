import { combineReducers } from "redux";
import userReducer from "./userSlice";
import listingReducer from "./listingSlice";

export default combineReducers({
  listings: listingReducer,
  users: userReducer,
});
