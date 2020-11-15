import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import memoize from "lodash.memoize";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "users",
  initialState: { list: [] },
  reducers: {
    usersRequested: (users, action) => {
      users.loading = true;
    },
    usersReceived: (users, action) => {
      users.list = action.payload;
      users.loading = false;
      users.lastFetch = Date.now();
    },
    usersRequestFailed: (users, action) => {
      users.loading = false;
    },
    userAdded: (users, action) => {
      users.list.push(action.payload.user);
      // localStorage.setItem("authToken", action.payload.token);
      // users.loggedInUser = action.payload.user;
    },
    userRemoved: (users, action) => {
      users.list.pop((user) => user._id !== action.payload._id);
    },
    authStart: (users, action) => {
      users.loggedIn = false;
    },
    authSuccess: (users, action) => {
      users.loggedIn = true;
    },
  },
});

export const {
  userAdded,
  usersRequested,
  usersReceived,
  usersRequestFailed,
  userRemoved,
} = slice.actions;

export default slice.reducer;

//Action creators
export const loadUsers = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: "/users",
      onStart: usersRequested.type,
      onSuccess: usersReceived.type,
      onError: usersRequestFailed.type,
    })
  );
};

export const getUsers = (state) => state.app.users.list;
// export const loggedInUser = (state) => state.app.users.loggedInUser;

export const addUser = (user) =>
  apiCallBegan({
    url: "/users",
    method: "post",
    data: user,
    onSuccess: userAdded.type,
  });

export const removeUser = () =>
  apiCallBegan({
    url: "/users/me",
    method: "delete",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authToken"),
    },
    onSuccess: userRemoved.type,
  });

export const getUserById = createSelector(
  (state) => state.app.users,
  (users) => memoize((id) => users.filter((user) => user._id === id))
);
