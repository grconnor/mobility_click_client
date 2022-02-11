// Library Imports:
import "./mainnew.css";
import React, { useEffect } from "react";

// Component Imports:
import Form from "../MultistepForm/Form";
import HIW from "../HIW/HIW";
import { GaPageView } from "../..";
import CommonPageHeadContent from "../CommonPageHeadContent/CommonPageHeadContent";

// Image Imports:

const MainNew = () => {
  useEffect(() => { GaPageView("Main"); }, []);
  return (
    <>
      <CommonPageHeadContent title="Budpadinbil" description="main" />
      <section>
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
      </section>
    </>
  );
};

export default MainNew;
