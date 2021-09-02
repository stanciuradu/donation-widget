import React from "react";
import "../components/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container-header">
        <h1>
          <em className="price-container">$167</em>{" "}
          <span className="container-header-span">
            still needed for this project
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Header;
