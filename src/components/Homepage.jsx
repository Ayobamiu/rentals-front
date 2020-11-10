import React, { Component } from "react";
import Cities from "./Cities";
import FirstSection from "./FirstSection";
import Footer from "./Footer";
import HomePageCallToAction from "./HomePageCallToAction";
import ProductsOnHomepage from "./ProductsOnHomepage";
import SuitedFor from "./SuitedFor";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <FirstSection />
        <Cities />
        <SuitedFor />
        <HomePageCallToAction />
        <ProductsOnHomepage />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Homepage;
