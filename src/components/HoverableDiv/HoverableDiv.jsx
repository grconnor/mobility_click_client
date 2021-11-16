// Library Imports:
import React, { useState } from "react";
import { render } from "react-dom";

// Component Imports:

// Image Imports:
// import BPDBCropped from "../../images/logos/BudPaDinBil/mmbudpådinbilcroppedwhite.png";


const HoverableDiv = ({ handleMouseEnter, handleMouseLeave }) => {
  return (
    <div className="flexbox-hoverablediv-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* <img src={BPDBCropped} alt="logo" id="navigationbar-image" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}/> */}
    </div>
  );
};

const HoverText = () => {
  return (
    <div>
      Gå hem
    </div>
  );
};

const HoverExample = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="flexbox-hoverexample-container">
      {/* Hover over this div to hide/show <HoverText /> */}
      <div className="flexbox-hoverexample-hoverablediv-container">
        <HoverableDiv
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="flexbox-hoverexample-text-container">
        {isHovering && <HoverText />}
      </div>
    </div>
  );
};

render(<HoverExample />, document.getElementById("root"));
