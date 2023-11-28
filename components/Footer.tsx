import React from "react";
import "./Buttons.css";
import Image from "next/image";
import logo from "./images/MovieNestLogo.png";
import api_logo from "./images/api-logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bottom-button-container, button-container">
      <Link href="http://localhost:3000/">
        <Image src={logo} alt="Logo" className="logo-image" />
        </Link>
      <div>
        <Image src={api_logo} alt="Logo" width={130} />
      </div>
      <div className="right-buttons">
        <Link href="http://localhost:3000/">
        <button className="home-button">Home</button>
        </Link>
        <button className="contact-button">Contact</button>
      </div>
    </div>
  );
}
