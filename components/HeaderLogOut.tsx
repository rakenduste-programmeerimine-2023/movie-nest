import React from "react";
import "./Buttons.css";
import Image from "next/image";
import logo from "./images/MovieNestLogo.png";

export default function HeaderLogOutButton() {
  return (
    <div className="button-container">
      <div className="left-buttons">
        <Image src={logo} alt="Logo" width={130} height={100} />
        <button className="search-button">
          <span role="img" aria-label="luup">
            🔍
          </span>
          Search
        </button>
      </div>
      <div className="right-buttons">
        <button className="home-button">Home</button>
        <button className="contact-button">Contact</button>
        <button className="log-out-button">Log out</button>
      </div>
    </div>
  );
}
