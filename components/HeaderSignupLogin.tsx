import React from "react";
import "./Buttons.css";
import Image from "next/image";
import logo from "./images/MovieNestLogo.png";
import Link from "next/link";

export default function HeaderSignupLogin() {
  return (
    <div className="button-container">
      <div className="left-buttons">
        <Image src={logo} alt="Logo" className="logo-image" />
        <button className="search-button">
          <span role="img" aria-label="luup">
            🔍
          </span>
          Search
        </button>
      </div>
      <div className="right-buttons">
        <button className="home-button">Home</button>
        <Link href="/contact">
          <button className="contact-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}
