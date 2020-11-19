import React, { Component } from "react";
import "./App.css";
import BaseRoutes from "./routes";
import "font-awesome/css/font-awesome.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <BaseRoutes />
      </React.Fragment>
    );
  }
}

export default App;
