// Library Imports:
import "./main.css";
import React from "react";

// Component Imports:
import HIW from "../HIW/HIW";
import Badges from "../Badges/Badges";
import Form from "../../components/MultistepForm/Form";

// Image Imports:
import Car from "../../images/carr.jpg";

const Main = () => {
  const paradiv = document.getElementById("badge-paragraph");

  function spanclick() {
    window.scrollTo(0, 700);
    if (paradiv) {
      setTimeout(() => {
        paradiv.style.color = "red";
      }, 500);
      setTimeout(() => {
        paradiv.style.color = "black";
      }, 1500);
    }
  }

  return (
    <>
      <div className="flexbox-main-outer-container">
        <div className="flexbox-main-salja-outer-container">
          <div className="flexbox-main-salja-inner-container">
            <div className="flexbox-main-salja-item-container">
              <div className="flexbox-main-salja-container">
                <div className="flexbox-main-salja-text-container">
                  <div className="flexbox-main-salja-text-inner-container">
                    <div className="flexbox-main-salja-text-heading-container">
                      <h1 id="salja-heading">
                        Sälj din bil. Snabbt, tryggt och enkelt.
                      </h1>
                    </div>
                    <div className="flexbox-main-salja-text-heading-paragraph-container">
                      <p id="salja-heading-paragraph">
                        Vi köper in svensksålda bilar oavsett märke, som gått under 18 000 mil och är 12 år gammal.
                      </p>
                    </div>
                    {/* <div className="flexbox-main-salja-list-container">
                      <ul>
                        <li>
                          Fyll i uppgifterna i formuläret till höger.
                        </li>
                        <li>
                          Få en kostnadsfri värdering inom 24 timmar.
                        </li>
                        <li>
                          När du acceptera vårt bud, ordnar vi transport och betalning, snabbt, tryggt och enkelt.
                        </li>
                      </ul>
                    </div> */}
                    {/* <div className="flexbox-main-salja-line" /> */}
                  </div>
                </div>
              </div>
              <div className="flexbox-main-form-container">
                <Form />
              </div>
            </div>
          </div>
        </div>
        {/* <Badges /> */}
        <HIW />
      </div>
    </>
  );
};

export default Main;
