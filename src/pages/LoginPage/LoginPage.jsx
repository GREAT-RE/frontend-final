import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./LoginPage.css";
import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "signUp",
    };
  }

  changeView = (view) => {
    this.setState({
      currentView: view,
    });
  };

  currentView = () => {
    switch (this.state.currentView) {
      case "signUp":
        return (
          <form>
            <h2>Sign In or Register</h2>
            <fieldset className="fieldset-size">
              <legend>Create Account</legend>
              <div className="loginRegisterView">
              <button
              className="account-btn"
              type="button"
              onClick={() => this.changeView("logIn")}
            >
              Login
            </button>
            <p>Register</p>
            </div>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
                <li>
                  <label htmlFor="profile">Profile:</label>
                  <select id="profile" required>
                    <option value="">-- Select One --</option>
                    <option value="student">Student</option>
                    <option value="landlord">Landlord</option>
                  </select>
                </li>
              </ul>
            </fieldset>
            <button className="submit-btn">Submit</button>

          </form>
        );
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset className="fieldset-size-login">
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required />
                </li>
                <li className="forgot-password">
                  <i></i>
                  <a onClick={() => this.changeView("PWReset")} href="#">
                    Forgot Password?
                  </a>
                </li>
              </ul>
            </fieldset>
            <button className="login-btn">Login</button>
            <button type="button" onClick={() => this.changeView("signUp")}>
              Create an Account
            </button>
          </form>
        );
      case "PWReset":
        return (
          <form className="form">
            <h2>Reset Password</h2>
            <fieldset className="fieldset">
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
              </ul>
            </fieldset>
            <button className="reset-btn">Send Reset Link</button>
            <button type="button" onClick={() => this.changeView("logIn")}>
              Go Back
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  render() {
    return <section id="entry-page">{this.currentView()}</section>;
  }
}

export default Login;
