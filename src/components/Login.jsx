import React, { Component } from "react";
import TextInput from "./common/TextInput";
import Navbar from "./Navbar";
import Joi, { abort } from "joi-browser";
import { validateAllInput, validateSingleInput } from "../services/validate";
import { loginSchema } from "../services/schemas";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  handleChange = (event) => {
    event.preventDefault();
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    data[event.target.name] = event.target.value;
    const error = validateSingleInput(event.target, loginSchema);
    if (error) {
      errors[event.target.name] = error[0].message;
    } else delete errors[event.target.name];
    this.setState({ data, errors });
  };
  handleSubmit = () => {
    const errors = validateAllInput(this.state.data, loginSchema);
    this.setState({ errors });
    if (!errors) console.log("Submited");
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
            error={this.state.errors && this.state.errors.email}
          />
          <TextInput
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            iconClass="fa fa-lock"
            error={this.state.errors && this.state.errors.password}
          />
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="submit-btn"
          >
            Sign in
          </button>
          <div className="forget-password">
            <a href="#">Forgot password?</a>
            <span>
              Not a member? <Link to="/signup">Sign up</Link>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
