import React, { Component } from "react";
import Cities from "./Cities";
import FirstSection from "./FirstSection";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <FirstSection />
        <Cities />
      </React.Fragment>
    );
  }
}

export default Homepage;
