import React, { Component } from "react";
import TextInput from "./common/TextInput";
import Navbar from "./Navbar";
import { validateAllInput, validateSingleInput } from "../services/validate";
import { loginSchema } from "../services/schemas";
import { Link } from "react-router-dom";
import {
  getLoggedInUser,
  loadLoggedInUser,
  logUserIn,
} from "../store/authSlice";
import { connect } from "react-redux";

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
    const { email, password } = this.state.data;
    this.props.logUserIn(email, password);
  };

  render() {
    if (this.props.getLoggedInUser) { 
      window.location = "/";
    }
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
          {this.props.loggedInUser.status && (
            <small
              style={{ color: this.props.loggedInUser.status.color }}
              className="reusable-text-input-error"
            >
              {this.props.loggedInUser.status.message}
            </small>
          )}
          <div className="forget-password">
            {/* <a href="#">Forgot password?</a> */}
            <span>
              Not a member? <Link to="/signup">Sign up</Link>
            </span>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUser: state.app.user,
  getLoggedInUser: getLoggedInUser(),
});

const matchDispatchToProps = (dispatch) => ({
  loadLoggedInUser: () => dispatch(loadLoggedInUser()),
  logUserIn: (email, password) => dispatch(logUserIn(email, password)),
});

export default connect(mapStateToProps, matchDispatchToProps)(Login);
