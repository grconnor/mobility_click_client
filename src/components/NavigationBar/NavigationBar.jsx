// Library Imports:
import "./navigationbar.css";
import React from "react";

// Component Imports:

// image Imports:
import Logo from "../../images/logos/mobility_motors_logo.png";

const NavigationBar = () => {
  return (
    <>
      <div className="flexbox-navigationbar-outer-container">
        <div className="flexbox-navigationbar-image-container">
          <img src={Logo} alt="logo" id="navigationbar-image" />
        </div>
        <div className="flexbox-navigationbar-menu-container">
          <button type="button" id="navigationbar-menu-button-home">
            <a href="/">Hem</a>
          </button>
          <button type="button" id="navigationbar-menu-button-about-us">
            <a href="/om-oss">Om Oss</a>
          </button>
          <button type="button" id="navigationbar-menu-button-vardera">
            <a href="/vardera-din-bil">Värdera din bil</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
