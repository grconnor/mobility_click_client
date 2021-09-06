// Library Imports:
import "./main.css";
import React from "react";

// Component Imports:
import Badges from "../Badges/Badges";

// Image Imports:
import CarImage from "../../images/carr.jpg";
import PhoneImage from "../../images/image.png";


const Main = () => {
  return (
    <>
      <div className="flexbox-main-outer-container">
        <div className="flexbox-main-text-container">
          <div className="flexbox-main-text-heading-container">
            <h1>
              Sälj din bil online idag Snabbt, tryggt och enkelt.
            </h1>
          </div>
          <div className="flexbox-main-text-list-container">
            <ul>
              <li>
                Fyll i uppgifter om din bil
              </li>
              <li>
                Ta emot det högsta budet från Sveriges största bilköpare
              </li>
              <li>
                Sälj endast om du vill och pengarna direkt
              </li>
            </ul>
          </div>
          <div className="flexbox-main-paragraph-container">
            <p>Vår tjänst är <span>helt</span> kostnadsfri</p>
          </div>
          <div className="flexbox-main-button-container">
            <button id="main-button-vardera">
              <a href="/vardera-din-bil" id="a-tag">
                Ge mig högsta bud!
              </a>
            </button>
          </div>
        </div>
        <div className="flexbox-main-image-container">
          <img src={PhoneImage} alt="phone" />
        </div>
      </div>
      <Badges />
    </>
  )
}

export default Main;
