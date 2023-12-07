"use client";
import React from "react";
import "./Buttons.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  };
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <form
        className="d-flex gap-2"
        onSubmit={(e) => handleSubmit(e)}
        role="search"
        style={{ whiteSpace: "nowrap", display: "inline-flex" }}
      >
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="form-control mr-sm-2 rounded text-black pl-2 border border-solid border-gray-600 "
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ width: "180px", height: "28px", outline: "none" }}
          autoComplete="off"
          id="search-input"
        />
        <button
          className="search-button"
          type="submit"
          id="search-submit-button"
        >
          <span role="img" aria-label="luup">
            🔍
          </span>
          Search
        </button>
      </form>
    </nav>
  );
}
