import React from "react";
import { NavLink } from "react-router-dom";
import { getLoggedInUser } from "../../store/authSlice";
import "./css/style.css";

const MainNavbar = (props) => {
  const isLoggedIn = getLoggedInUser();
  return (
    <ul
      id="navbar"
      className="d-flex align-items-center justify-content-between p-3 bg-white"
    >
      <li className="link-medium mx-2">
        <NavLink to="/" className="link-medium">
          LODGEEK
        </NavLink>
      </li>
      <div className="d-flex align-items-center justify-content-between">
        {isLoggedIn && (
          <li className="mx-2">
            <NavLink class="link-x-small" to="/dashboard/rents">
              Dashboard
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li className="mx-2">
            <NavLink to="/login" className="link-x-small">
              Sign In
            </NavLink>
          </li>
        )}
        <li className="mx-2">
          <NavLink to="/add-listing" className="primary-button button-small">
            Add a Listing
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default MainNavbar;

{
  /* <div className="main-navbar " id="main-navbar">
<NavLink className="main-navbar__logo" to="/">
  Logo
</NavLink>

<NavLink
  className="main-navbar__link primary-button button-small"
  to="/add-listing"
>
  Add a Listing
</NavLink>
<NavLink className="main-navbar__link" to="/">
  <div class="dropdown">
    <div
      className="go-back-button border-dark"
      type="button"
      id="profileDropdownMenuButton"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      // style={{ backgroundImage: `url(${enugu})` }}
    >
      <FontAwesomeIcon icon={faUser} />
    </div>
    <ul
      class="dropdown-menu"
      aria-labelledby="profileDropdownMenuButton"
    >
      <li>
        <NavLink class="dropdown-item" to="/dashboard/rents">
          Dashboard
        </NavLink>
        <a class="dropdown-item" href="#">
          Messages
        </a>
      </li>
      <li>
        <NavLink class="dropdown-item" to="/add-listing">
          Add a Listing
        </NavLink>
      </li>
      <li>
        <a class="dropdown-item" href="#">
          Login
        </a>
      </li>
      <li>
        <NavLink className="dropdown-item" to="/signup">
          Sign Up
        </NavLink>
      </li>
    </ul>
  </div>
</NavLink>
</div> */
}
