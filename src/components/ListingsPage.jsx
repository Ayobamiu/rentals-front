import React, { Component } from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { addUser, getUsers, loadUsers, removeUser } from "../store/userSlice";

class ListingsPage extends Component {
  state = {};
  componentDidMount() {
    this.props.loadUsers();
  }
  handleAddUser = async () => {
    const user = {
      email: "email4@e.com",
      phone: "08023361415",
      firstName: "firstName",
      lastName: "lastName",
      birthDate: "2020-11-03",
      password: "password",
    };
    this.props.addUser(user);
  };
  handleRemoveUser = async () => {
    this.props.removeUser();
  };
  render() {
    return (
      <div className="listings-page">
        <Navbar />
        <button onClick={this.handleAddUser}>Add User</button>
        <button onClick={this.handleRemoveUser}>Remove User</button>
        {this.props.users.map((user) => (
          <div key={user._id}>
            <div>id:{user._id}</div>
            <div>first Name: {user.firstName}</div>
            <div>last Name: {user.lastName}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
            <hr />
          </div>
        ))}

        <div>Logged-in User: </div>
        {/* <div>firstName: {this.props.loggedInUser.firstName}</div>
        <div>lastName: {this.props.loggedInUser.lastName}</div>
        <div>email: {this.props.loggedInUser.email}</div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.app.users.list,
  loggedInUser: state.app.users.loggedInUser,
});

const matchDispatchToProps = (dispatch) => ({
  loadUsers: () => dispatch(loadUsers()),
  addUser: (user) => dispatch(addUser(user)),
  removeUser: (user) => dispatch(removeUser(user)),
});

export default connect(mapStateToProps, matchDispatchToProps)(ListingsPage);
