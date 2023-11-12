import React from 'react';
import './Buttons.css';

export default function HeaderButton() {
  return (
    <div className="button-container">
       <div className="left-buttons">
       <button className="search-button">
                <span role="img" aria-label="luup">
                    🔍
                </span> 
                Search
            </button>
      </div>
      <div className="right-buttons">
        <button className="contact-button">
            Contact
        </button>
      </div>
    </div>
  );
}