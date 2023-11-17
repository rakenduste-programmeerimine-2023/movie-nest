import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="input-container">
          <h2 className="login-heading">Please enter your login information</h2>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>

        <button className="login-button">Log in</button>

      </div>
    </div>
  );
}
