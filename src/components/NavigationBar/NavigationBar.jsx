// Library Imports:
import "./navigationbar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Component Imports:
import Hamburger from "../../components/Hamburger/Hamburger";
// import { HoverableDiv } from "../../components/HoverableDiv/HoverableDiv";

// Image Imports:
import BPDBFinal from "../../images/logos/mmbudpadinbil.png";
// import BPDBCropped from "../../images/logos/BudPaDinBil/mmbudpådinbilcroppedwhite.png";

const HoverText = () => {
  return <div>Gå hem</div>;
};

const NavigationBar = () => {
  const [inHover, setInHover] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1300);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1300);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    console.log("Hello 1300px +")
    return () => window.removeEventListener("resize", updateMedia);
  });

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }

  const LogoRedirect = () => {
    window.location.href = "/";
  };

  const handleRedirectHome = () => {
    window.location.href = "/";
  };

  const handleRedirectFAQ = () => {
    window.location.href = "/faq";
  };

  const handleRedirectOmOss = () => {
    window.location.href = "/om-oss";
  };

  // const isComputerDevice = useMediaQuery({ query: "(min-width: 1500px" });
  // const isMobileDevice = useMediaQuery({ query: "(max-width: 1499px" });
  // const isComputerDevice = useMediaQuery({ query: "(min-width: 1280px" });
  // const isMobileDevice = useMediaQuery({ query: "(max-width: 1000px" });
  // const XisMobileDevice = false;
  // const XisComputerDevice = false;
  // const mobileContainer = document.getElementsByClassName(
  //   "flexbox-navigationbar-mobile-outer-wrapper"
  // );
  // const computerContainer = document.getElementsByClassName(
  //   "flexbox-navigationbar-outer-container"
  // );

  // if (isComputerDevice) {
  //   console.log("Hello Computer Device")
  //   if (mobileContainer) {
  //     mobileContainer.style.display = "none";
  //   }
  // }

  // if (isMobileDevice) {
  //   console.log("Hello Mobile Device");
  //   console.log("computerContainer", computerContainer);
  // }

  // if (isComputerDevice) {
  //   console.log("Hello Computer Device");

  // }

  // window.onload = function() {
  //   if (isComputerDevice) {
  //     console.log("Hello Computer Device");
  //     console.log("computerContainer");
  //   }
  // }

  const list = document.getElementById("mobile-navigation-list");
  const burger1 = document.getElementById("burger1");
  const burger2 = document.getElementById("burger2");
  const burger3 = document.getElementById("burger3");

  if (list) {
    if (hamburgerOpen) {
      list.style.display = "inline";
    } else {
      list.style.display = "none";
    }
  }

  if (burger1) {
    if (hamburgerOpen) {
      burger1.style.transform = "rotate(25deg)";
    } else {
      burger1.style.transform = "rotate(0)";
    }
  }

  if (burger2) {
    if (hamburgerOpen) {
      burger2.style.transform = "translateX(100%)";
      burger2.style.opacity = 0;
    } else {
      burger2.style.transform = "translateX(0)";
      burger2.style.opacity = 1;
    }
  }

  if (burger3) {
    if (hamburgerOpen) {
      burger3.style.transform = "rotate(-25deg)";
    } else {
      burger3.style.transform = "rotate(0)";
    }
  }

  return (
    <>
      <div className="flexbox-navigationbar-outer-container">
        {isDesktop ? (
          <>
            <div className="flexbox-navigationbar-menu-container">
              <button
                type="button"
                id="navigationbar-menu-button-home"
                onClick={handleRedirectHome}
              >
                <a href="/">Hem</a>
              </button>
              <button
                type="button"
                id="navigationbar.menu-button-faq"
                onClick={handleRedirectFAQ}
              >
                <a href="/faq">FAQ</a>
              </button>
              <button
                type="button"
                id="navigationbar-menu-button-omoss"
                onClick={handleRedirectOmOss}
              >
                <a href="/om-oss">Om Oss</a>
              </button>
            </div>
            <div
              className="flexbox-navigationbar-logo-container"
              onClick={LogoRedirect}
              id="honerablediv-nav"
            >
              <div className="flexbox-navigationbar-logo">
                <img src={BPDBFinal} alt="logo" id="navigationbar-logo" />
              </div>
              {inHover && <HoverText />}
            </div>
          </>
        ) : (
          <>
            <div className="flexbox-navigationbar-mobile-outer-container">
              <div className="flexbox-navigationbar-mobile">
                <ul id="mobile-navigation-list">
                  <li>
                    <a href="/">Hem</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/om-oss">Om Oss</a>
                  </li>
                </ul>
                <div
                  className="flexbox-navigationbar-mobile-hamburger-container"
                  onClick={toggleHamburger}
                >
                  <Hamburger isOpen={hamburgerOpen} />
                </div>
              </div>
            </div>
            <div
              className="flexbox-navigationbar-logo-container"
              onClick={LogoRedirect}
              id="honerablediv-nav"
            >
              <div className="flexbox-navigationbar-logo">
                <img src={BPDBFinal} alt="logo" id="navigationbar-logo" />
              </div>
              {inHover && <HoverText />}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavigationBar;
