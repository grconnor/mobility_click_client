// Library Imports:
import "./mainnew.css";
import React from "react";

// Component Imports:
import Form from "../MultistepForm/Form";
import HIW from "../HIW/HIW";

// Image Imports:

const MainNew = () => {
  return (
    <>
      <div className="flexbox-main-outer-container">
        <div className="flexbox-main-salja-outer-container">
          <div className="flexbox-main-salja-form-outer-container">
            <Form />
          </div>
        </div>
        <div className="flexbox-main-hiw-outer-container">
          <HIW />
        </div>
      </div>
    </>
  );
};

export default MainNew;
