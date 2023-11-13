import React from "react";
import "./Buttons.css";
import Image from "next/image";
import logo from "./images/MovieNestLogo.png";

export default function Header() {
  return (
    <div className="bottom-button-container, button-container">
      <Image src={logo} alt="Logo" width={130} height={100} />
      <div className="right-buttons">
        <button className="home-button">Home</button>
        <button className="contact-button">Contact</button>
      </div>
    </div>
  );
}
