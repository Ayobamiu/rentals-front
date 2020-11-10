import React, { Component } from "react";

class HomePageCallToAction extends Component {
  state = {};
  render() {
    return (
      <div className="homepage-call-to-action">
        <span className="homepage-call-to-action-text">
          Start making up to N300,000 on your free Rooms
        </span>
        <a className="homepage-call-to-action-btn" href="#">
          Host a Room
        </a>
      </div>
    );
  }
}

export default HomePageCallToAction;
