"use client"
import React from "react";
import "./Buttons.css";
import {useRouter} from "next/navigation";
import {useState} from "react"

export default function SearchInput() {
  const[searchText, setSearchText] = useState("");
  const router = useRouter();
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  }
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <form 
        className="d-flex gap-2" 
        onSubmit={(e) => handleSubmit(e)} 
        role="search" 
        style={{ whiteSpace: 'nowrap', display: 'inline-flex' }}
      >
        <input 
        onChange={(e) => setSearchText(e.target.value)} 
        className="form-control mr-sm-2" 
        type="search" 
        placeholder="Search" 
        aria-label="Search" 
        style={{ width: '110px', outline: 'none' }}
      />
        <button className="search-button" type="submit">
          <span role="img" aria-label="luup">
            🔍
          </span>
          Search
        </button>
      </form>
    </nav>
  );
}
