// Library Imports:
import "./hiw.css"
import React from "react";

// Component Imports:

// Image Imports:
// import Phone from "../../images/phone.png";
import Erbjudande from "../../images/erbjudande.jpeg";
import Registrera from "../../images/registrera.jpeg";
// import Computer from "../../images/computer.png";
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
              <img src={Registrera} alt="hiw1" />
              <div className="flexbox-hiw-item-text-container">
                <div className="flexbox-hiw-item-text-heading-container">
                  <h2 id="hiw-item-heading">
                    1. Ange dina uppgifter
                  </h2>
                </div>
                <p id="hiw-item-paragraph">
                  Fyll i bilens registreringsnummer och nuvarande mätarställning samt ditt telefonnummer. I dagsläget hanterar vi inte bilar som används i kommersiellt syfte som exempelvis taxi. vi hanterar inte heller privatimporterade fordon.
                </p>
              </div>
            </div>
            <div className="flexbox-hiw-item flexbox-hiw-item-2">
              <img src={Erbjudande} alt="hiw2" />
              <div className="flexbox-hiw-item-text-container">
                <div className="flexbox-hiw-item-text-heading-container">
                  <h2 id="hiw-item-heading">
                    2. Få ditt erbjudande
                  </h2>
                </div>
                <p id="hiw-item-paragraph">
                  Eftersom varje begagnad-bil är unik, kontaktar vi dig för en kortare intervju. Därefter utför vi en dagsaktuell analys av marknaden och presenterar ett erbjudande till dig. Erbjudandet är kostnadsfritt.
                </p>
              </div>
            </div>
            <div className="flexbox-hiw-item flexbox-hiw-item-3">
              <img src={Customers} alt="hiw3" />
              <div className="flexbox-hiw-item-text-container">
                <div className="flexbox-hiw-item-text-heading-container">
                  <h2 id="hiw-item-heading">
                    3. När vi är överens
                  </h2>
                </div>
                {/* <div className="flexbox-hiw-item-line" /> */}
                <p id="hiw-item-paragraph">
                  Vi testar och hämtar bilen när det passar dig. En av våra fordonstestare kontrollerar bilens skick.Efter det görs en banköverföring till ditt konto.
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
