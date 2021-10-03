// Library Imports:
import "./success.css";
import React from "react";

// Component Imports:

// Image Imports:

const Success = () => {
  return (
    <>
      <div className="flexbox-success-outer-container">
        <div className="flexbox-success-inner-container">
          <div className="flexbox-success-heading-container">
            <h2 id="received-heading">
              Tack, vi har mottagit din information och återkommer inom kort.
            </h2>
          </div>
          <div className="flexbox-success-whathappens-container">
            <div className="flexbox-success-whathappens-heading-container">
              <h2>Vad händer nu?</h2>
            </div>
            <div className="flexbox-success-whathappens-list-container">
              <ul>
                <li>
                  Vi kommer kontakta dig för att gå igenom bilens skick och utrustning.
                </li>
                <li>
                  Våra erfarna inköpare värderar din bil.
                </li>
                <li>
                  Vi återkommer till dig med bästa möjliga bud.
                </li>
                <li>
                  Efter accepterat bud, ordnar vi med betalning och upphämtning.
                </li>
              </ul>
            </div>
          </div>
          <div className="flexbox-success-button-container">
            <div className="flexbox-success-button">
              <button type="button">
                <a href="/faq">FAQ</a>
              </button>
            </div>
            <div className="flexbox-success-button">
              <button type="button">
                <a href="/om-oss">Om Oss</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
