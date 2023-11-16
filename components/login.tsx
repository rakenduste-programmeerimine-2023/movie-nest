import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
      </div>
    </div>
  );
}
