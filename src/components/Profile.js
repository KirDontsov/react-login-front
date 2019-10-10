import React, { Component } from "react";
import { getProfile } from "./UserFunctions";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      errors: {}
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    getProfile(token).then((res) => {
      this.setState({
        name: res.user.name,
        email: res.user.email
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
