import React from "react";
import BackArrow from "../../../image/BackArrow.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import enugu from "../../../image/enugu.jpg";
import { NavLink } from "react-router-dom";

const BackButton = ({ onClick }) => {
  return (
    <div className="my-3 container d-flex justify-content-between align-items-center">
      <div className="go-back-button" onClick={onClick}>
        <img src={BackArrow} alt="" />
      </div>
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
        <ul class="dropdown-menu" aria-labelledby="profileDropdownMenuButton">
          <li>
            <NavLink class="dropdown-item" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Messages
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Add a Listing
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BackButton;
