// Library Imports:
import "./badges.css"
import React from "react";

// Component Imports:

// Image Imports:
import Badge from "../../images/shield.png";

const Badges = () => {
  return (
    <>
      <div className="flexbox-badges-outer-container">
        <div className="flexbox-badges-item-container">
          <div className="flexbox-badges-item">
            <img src={Badge} alt="badge" />
            <p id="badge-paragraph">
              Få en kostnadsfri onlinevärdering. Sälj endast om du vill - <span>Ej bindande</span> och <span>helt kostnadsfritt</span>
            </p>
          </div>
          <div className="flexbox-badges-item">
            <img src={Badge} alt="badge" />
            <p id="badge-paragraph">
              Vår tjänst samlar bud från bilhandlare över hela landet åt dig helt kostnadsfritt.
            </p>
          </div>
          <div className="flexbox-badges-item">
            <img src={Badge} alt="badge" />
            <p id="badge-paragraph">
              Våra bilhandlare sträcker sig över hela landet. Vi har säkerställt att våra anslutna bilhandlare är seriösa så att du blir nöjd.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Badges;
