import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpSchema } from "../services/schemas";
import {
  validateAge,
  validateAllInput,
  validateSingleInput,
} from "../services/validate";
import { getLoggedInUser } from "../store/authSlice";
import { addUser } from "../store/userSlice";
import TextInput from "./common/TextInput";
import Navbar from "./Navbar";

class SignUp extends Component {
  state = {
    data: {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      birthAge: "",
      password: "",
    },
    errors: {},
  };
  handleChange = (event) => {
    event.preventDefault();
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    data[event.target.name] = event.target.value;
    if (event.target.name !== "birthAge") {
      const error = validateSingleInput(event.target, signUpSchema);
      if (error) {
        errors[event.target.name] = error[0].message;
      } else delete errors[event.target.name];
      this.setState({ data, errors });
    } else {
      const error = validateAge(event.target.value);
      if (error) {
        errors[event.target.name] = error;
      } else delete errors[event.target.name];
      this.setState({ data, errors });
    }
  };

  handleSubmit = () => {
    const errors = validateAllInput(this.state.data, signUpSchema);
    this.setState({ errors });
    if (!errors) this.props.addUser(this.state.data);
  };

  render() {
    if (this.props.getLoggedInUser) {
      window.location = "/";
    }
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
            error={this.state.errors && this.state.errors.email}
          />
          <TextInput
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={this.handleChange}
            iconClass="fa fa-phone"
            error={this.state.errors && this.state.errors.phone}
          />
          <TextInput
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            note="Make sure this matched the name on your ID"
            error={this.state.errors && this.state.errors.firstName}
          />
          <TextInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            note="Make sure this matched the name on your ID"
            error={this.state.errors && this.state.errors.lastName}
          />
          <TextInput
            type="date"
            name="birthAge"
            label="Date"
            placeholder="Birth Age"
            onChange={this.handleChange}
            note="You must have attained the age of majority (18)"
            error={this.state.errors && this.state.errors.birthAge}
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
            Agree & Sign-up
          </button>
          {this.props.signUpError && (
            <small
              style={{ color: this.props.signUpError.color }}
              className="reusable-text-input-error"
            >
              {this.props.signUpError.message}
            </small>
          )}
          <div className="sign-up-agreement">
            By clicking Agree & Sign-up, I agree to Lodgeek's Terms of Services.
          </div>
          <div className="forget-password">
            <span>
              Already a member? <a href="/login">Log in</a>
            </span>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  signUpError: state.app.users.status,
  getLoggedInUser: getLoggedInUser(),
});

const matchDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
});

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
