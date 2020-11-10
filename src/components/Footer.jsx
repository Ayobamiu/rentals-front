import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <p>&copy; Lodgeek 2020</p>
        <a href="#">Privacy</a>
        <div className="footer-links">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>
    );
  }
}

export default Footer;
