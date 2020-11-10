import React, { Component } from "react";
import TextInput from "./common/TextInput";
import Navbar from "./Navbar";

class Login extends Component {
  state = { email: "", password: "" };
  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="login">
          <h1 className="login-heading">Welcome, Login to Continue</h1>
          <TextInput
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            iconClass="fa fa-envelope"
          />
          <TextInput
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            iconClass="fa fa-lock"
          />
          <a href="#" type="submit" className="submit-btn">
            Sign in
          </a>
          <div className="forget-password">
            <a href="#">Forgot password?</a>
            <span>
              Not a member? <a href="#">Sign up</a>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
