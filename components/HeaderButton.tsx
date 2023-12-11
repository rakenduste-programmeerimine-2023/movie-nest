import React from "react";
import "./Buttons.css";
import Image from "next/image";
import logo from "./images/MovieNestLogo.png";
import Link from "next/link";
import AuthButton from "./AuthButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchInput from "./SearchInput";

export default function HeaderButton() {
  return (
    <div className="button-container">
      <div className="left-buttons">
        <Link href="/">
          <Image src={logo} alt="Logo" className="logo-image" />
        </Link>
        <SearchInput />
      </div>
      <div className="right-buttons">
        <Link href="/contact">
          <button className="contact-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}
