// Library Imports:
import "./hiw.css"
import React from "react";

// Component Imports:

// Image Imports:
import Phone from "../../images/phone.png";
import Computer from "../../images/computer.png";
import Customers from "../../images/customers.png";

const HIW = () => {
  return (
    <>
      <div className="flexbox-hiw-outer-container">
        <div className="flexbox-hiw-inner-container">
          <div className="flexbox-hiw-heading-container">
            <h1 id="hiw-heading">
              Hur fungerar det?
            </h1>
          </div>
          <div className="flexbox-hiw-item-container">
            <div className="flexbox-hiw-item flexbox-hiw-item-1">
              <img src={Phone} alt="hiw1" />
              <div className="flexbox-hiw-item-text-container">
                <div className="flexbox-hiw-item-text-heading-container">
                  <h2 id="hiw-item-heading">
                    1. Ange biluppgifterna
                  </h2>
                </div>
                <p id="hiw-item-paragraph">
                  Därefter tillämpar vi en massa information om din bil.
                </p>
              </div>
            </div>
            <div className="flexbox-hiw-item flexbox-hiw-item-2">
              <img src={Computer} alt="hiw2" />
              <div className="flexbox-hiw-item-text-container">
                <div className="flexbox-hiw-item-text-heading-container">
                  <h2 id="hiw-item-heading">
                    2. Få ett prisförslag
                  </h2>
                </div>
                <p id="hiw-item-paragraph">
                  Några utvalda köpare tar emot din annons.
                </p>
                <p id="hiw-item-paragraph">
                  De kollar igenom informationen och tar kontakt med dig med ett bud. Budet är inte bindande så om du inte är nöjd kan du tacka nej.
                </p>
              </div>
            </div>
            <div className="flexbox-hiw-item flexbox-hiw-item-3">
              <img src={Customers} alt="hiw3" />
              <div className="flexbox-hiw-item-text-container">
                <div className="flexbox-hiw-item-text-heading-container">
                  <h2 id="hiw-item-heading">
                    3. Ni kommer överens och bilaffären är klar
                  </h2>
                </div>
                {/* <div className="flexbox-hiw-item-line" /> */}
                <p id="hiw-item-paragraph">
                  Handlaren hjälper dig med allt pappersarbete och är du intresserad av att köpa ny bil kan de även hjälpa dig hitta en ny pärla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HIW;
