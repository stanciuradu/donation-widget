import React from "react";
import "../../components/Header/Header.css";
import ArrawDown from "../ArrawDown/ArrawDown";

function Header(props) {
  const { totalPrice } = props;
  return (
    <div className="header">
      <div className="container-header">
        <h1>
          <em className="price-container">{totalPrice}$</em>{" "}
          <span className="container-header-span">
            still needed for this project
          </span>
        </h1>
      </div>
      <ArrawDown />
    </div>
  );
}

export default Header;
