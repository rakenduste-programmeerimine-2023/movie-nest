import React from "react";
import "./Buttons.css";
import Image from "next/image";
import logo from "./images/MovieNestLogo.png";
import api_logo from "./images/api-logo.svg";

export default function Header() {
  return (
    <div className="bottom-button-container, button-container">
      <Image src={logo} alt="Logo" className="logo-image" />
      <div>
        <Image src={api_logo} alt="Logo" width={130} />
      </div>
      <div className="right-buttons">
        <button className="home-button">Home</button>
        <button className="contact-button">Contact</button>
      </div>
    </div>
  );
}
