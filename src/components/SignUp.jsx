import React, { Component } from "react";
import TextInput from "./common/TextInput";
import Navbar from "./Navbar";

class SignUp extends Component {
  state = { email: "", password: "" };
  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="sign-up">
          <h1 className="sign-up-heading">Welcome, sign-up to Continue</h1>
          <TextInput
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            iconClass="fa fa-envelope"
            note="You'll get updates and reciepts on this email"
          />
          <TextInput
            type="phone"
            name="tel"
            placeholder="Phone"
            onChange={this.handleChange}
            iconClass="fa fa-phone"
          />
          <TextInput
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            note="Make sure this matched the name on your ID"
          />
          <TextInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            note="Make sure this matched the name on your ID"
          />
          <TextInput
            type="number"
            name="age"
            placeholder="Birth Age"
            onChange={this.handleChange}
            note="You must have attained the age of majority (18)"
          />
          <TextInput
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            iconClass="fa fa-lock"
          />
          <a href="#" type="submit" className="submit-btn">
            Agree & Sign-up
          </a>
          <div className="sign-up-agreement">
            By clicking Agree & Sign-up, I agree to Lodgeek's Terms of Services.
          </div>
          <div className="forget-password">
            <span>
              Already a member? <a href="#">Log in</a>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
