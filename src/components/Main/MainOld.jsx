// Library Imports:
import "./main.css";
import React from "react";

// Component Imports:
import Badges from "../Badges/Badges";

// Image Imports:
import CarImage from "../../images/carr.jpg";
import Car from "../../images/carr.jpg";
import HIW from "../HIW/HIW";


const Main = () => {

  const para = document.getElementById("badge-paragraph")

  const spanClick = () => {
    window.scrollTo(0, 700)
    if (para) {
      setTimeout(() => {  para.style.color="red"; }, 500);
      setTimeout(() => { para.style.color="black" }, 1500);
    }
  }

  return (
    <>
      <div className="flexbox-main-outer-container">
        <div className="flexbox-main-text-container">
          <div className="flexbox-main-text-heading-container">
            <h1>
              Sälj din bil till oss. Snabbt, tryggt och enkelt.
            </h1>
          </div>
          <div className="flexbox-main-text-list-container">
            <ul>
              <li>
                Fyll i uppgifter om din bil
              </li>
              <li>
                Få en gratis värdering inom 24 timmar.
              </li>
              <li>
                Om du acceptera vårat bud, ordnar vi transport och betalning, snabbt, tryggt och enkelt.
              </li>
            </ul>
          </div>
          <div className="flexbox-main-line" />
          <div className="flexbox-main-paragraph-container">
            <p>Vår tjänst är <span onClick={spanClick}>helt</span> kostnadsfri för dig som äger en bil</p>
            <p>
              <ul>
                <li>
                  Under 18 000 mil
                </li>
                <li>
                  Inte mer än 12 år
                </li>
                <li>
                  Något annat
                </li>
              </ul>
            </p>
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
          <img src={Car} alt="phone" />
        </div>
      </div>
      <Badges />
      <HIW />
    </>
  )
}

export default Main;
