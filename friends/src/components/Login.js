import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
      isLoading: false,
    },
  };

  handleChanges = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    console.log("user login");
    e.preventDefault();
    axiosWithAuth()
      .post("api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        console.log("data", res.data);
        this.props.history.push("/FriendsList");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <button> Log in </button>
        </form>
      </div>
    );
  }
}
export default Login;
