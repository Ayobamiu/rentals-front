import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
class NotFound extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="not-found">Not found</div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default NotFound;
