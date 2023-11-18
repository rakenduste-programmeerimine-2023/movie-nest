import React from "react";
import "./Signup.css";

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        
      </div>
    </div>
  );
}
