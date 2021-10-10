// Library Imports:
import "./navigationbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Component Imports:
import { HoverableDiv } from "../../components/HoverableDiv/HoverableDiv";

// Image Imports:
import BPDBFinal from "../../images/logos/BudPaDinBil/MM-bud-bil-logo.png";
// import BPDBCropped from "../../images/logos/BudPaDinBil/mmbudpådinbilcroppedwhite.png";

const HoverText = () => {
  return (
    <div>
      Gå hem
    </div>
  )
}

const NavigationBar = () => {
  const [inHover, setInHover] = useState(false);

  const LogoRedirect = () => {
    window.location.href="/";
  }

  const handleRedirectHome = () => {
    window.location.href="/";
  }

  const handleRedirectFAQ = () => {
    window.location.href="/faq";
  }

  const handleRedirectOmOss = () => {
    window.location.href="/om-oss";
  }

  return (
    <>
      <div className="flexbox-navigationbar-outer-container">
        <div className="flexbox-navigationbar-logo-container" onClick={LogoRedirect} id="honerablediv-nav">
          {/* <HoverableDiv /> */}
          <div className="flexbox-navigationbar-logo">
            <img src={BPDBFinal} alt="logo" id="navigationbar-logo" />
          </div>
          {inHover && <HoverText /> }
        </div>
        {/* <img src={Logo} alt="logo" id="navigationbar-logo" /> */}
        <div className="flexbox-navigationbar-menu-container">
          <button type="button" id="navigationbar-menu-button-home" onClick={handleRedirectHome}>
            <a href="/">Hem</a>
          </button>
          <button type="button" id="navigationbar.menu-button-faq" onClick={handleRedirectFAQ}>
            <a href="/faq">FAQ</a>
          </button>
          <button type="button" id="navigationbar-menu-button-omoss" onClick={handleRedirectOmOss}>
            <a href="/om-oss">Om Oss</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
