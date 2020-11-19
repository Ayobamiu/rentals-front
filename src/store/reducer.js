import { combineReducers } from "redux";
import usersReducer from "./userSlice";
import userReducer from "./authSlice";
import listingReducer from "./listingSlice";

export default combineReducers({
  listings: listingReducer,
  users: usersReducer,
  user: userReducer,
});
