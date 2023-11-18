import React from "react";
import "./Buttons.css";
import Image from "next/image";
import logo from "./images/MovieNestLogo.png";
import Link from 'next/link'; 

export default function HeaderButton() {
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
        <button className="contact-button">Contact</button>
        <Link href="/login">
          <span className="log-in-button">Log in</span>
        </Link>
      </div>
    </div>
  );
}
