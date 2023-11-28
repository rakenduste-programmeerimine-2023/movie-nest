import React from "react";
import "./Buttons.css";
import Image from "next/image";
import logo from "./images/MovieNestLogo.png";
import Link from "next/link";
import AuthButton from "./AuthButton";
import {useRouter} from "next/navigation";
import {useState} from "react"
import SearchInput from "./SearchInput"


export default function HeaderButton() {
  return (
    <div className="button-container">
      <div className="left-buttons">
      <Link href="http://localhost:3000/">
        <Image src={logo} alt="Logo" className="logo-image" />
        </Link>
        <SearchInput/>
        {/* <Link href="/search">
        <button className="search-button">
          <span role="img" aria-label="luup">
            🔍
          </span>
          Search
        </button>
        </Link> */}
      </div>
      <div className="right-buttons">
        <Link href="/contact">
          <button className="contact-button">Contact</button>
        </Link>
        
      </div>
    </div>
  );
}
