// Library Imports
import "./footer.css";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Component Imports:
import useWindowDimensions from "../useWindowDimensions/useWindowDimensions";

// Image Imports:

const Footer = () => {
  const { height, width } = useWindowDimensions();
  // const isComputerDevice = useMediaQuery({ query: "(min-width: 415px" });
  // const isMobileDevice = useMediaQuery({ query: "(max-width: 414px" });

  // // const [width, setWidth] = useState(window.innerWidth);
  // // const breakpoint = 500;

  // // useEffect(() => {
  // //   const handleResizeWindow = () => setWidth(window.innerWidth);
  // //   window.addEventListener("resize", handleResizeWindow);
  // //   return () => {
  // //     window.removeEventListener("resize", handleResizeWindow);
  // //   };
  // // }, []);

  // const updateFooterMedia = () => {
  //   setFooterDesktop(window.innerWidth > 500);
  // };

  // useEffect(() => {
  //   window.addEventListener("resizefooter", updateFooterMedia);
  //   console.log("Hello");
  //   return () => window.removeEventListener("resizefooter", updateFooterMedia);
  // });

  // if (width > breakpoint) {

  // }

  return (
    <>
      <div className="flexbox-footer-outer-container">
        <div className="flexbox-footer-text-container">
          {width > 1000 && (
            <div className="flexbox-footer-copyright-computer-container">
              <p id="footer-paragraph">
                <span>Org.nr: 559165-4230</span> -{" "}
                <a href="tel:+46101646595">Tel: 010-164 65 95</a> -{" "}
                <a href="mailto:bud@mmgroup.se">Bud@mmgroup.se</a>
              </p>
            </div>
          )}
          {width < 1000 && (
            <div className="flexbox-footer-copyright-item-container">
              <div className="flexbox-footer-copyright-item">
                <span>Org.nr: 559165-4230</span>
              </div>
              <div className="flexbox-footer-copyright-item">
                <a href="tel:+46101646595">Tel: 010-164 65 95</a>
              </div>
              <div className="flexbox-footer-copyright-item">
                <a href="mailto:bud@mmgroup.se">Bud@mmgroup.se</a>
              </div>
            </div>
          )}
          {/* {isFooterDesktop ? (
            <>
              <div className="flexbox-footer-copyright-computer-container">
                <p id="footer-paragraph">
                  <span>Org.nr: 559165-4230</span> -{" "}
                  <a href="tel:+46101646595">Tel: 010-164 65 95</a> -{" "}
                  <a href="mailto:bud@mmgroup.se">Bud@mmgroup.se</a>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flexbox-footer-copyright-item-container">
                <div className="flexbox-footer-copyright-item">
                  <span>Org.nr: 559165-4230</span>
                </div>
                <div className="flexbox-footer-copyright-item">
                  <a href="tel:+46101646595">Tel: 010-164 65 95</a>
                </div>
                <div className="flexbox-footer-copyright-item">
                  <a href="mailto:bud@mmgroup.se">Bud@mmgroup.se</a>
                </div>
              </div>
            </>
          )} */}

          <p id="footer-copyright">
            <small>&copy; Copyright 2021, MMGroup</small>
          </p>

          {/* {isComputerDevice && (
            <div className="flexbox-footer-copyright-computer-container">
              <p id="footer-paragraph">
                <span>Org.nr: 559165-4230</span> -{" "}
                <a href="tel:+46101646595">Tel: 010-164 65 95</a> -{" "}
                <a href="mailto:bud@mmgroup.se">Bud@mmgroup.se</a>
              </p>
            </div>
          )}
          {isMobileDevice && (
            <div className="flexbox-footer-copyright-item-container">
              <div className="flexbox-footer-copyright-item">
                <span>Org.nr: 559165-4230</span>
              </div>
              <div className="flexbox-footer-copyright-item">
                <a href="tel:+46101646595">Tel: 010-164 65 95</a>
              </div>
              <div className="flexbox-footer-copyright-item">
                <a href="mailto:bud@mmgroup.se">Bud@mmgroup.se</a>
              </div>
            </div>
          )}
          <p id="footer-copyright">
            <small>&copy; Copyright 2021, MMGroup</small>
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
