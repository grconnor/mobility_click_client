// Library Imports:
import "./hiw.css";
import React from "react";

// Component Imports:

// Image Imports:
// import Phone from "../../images/phone.png";
// import Computer from "../../images/computer.png";
import Erbjudande from "../../images/erbjudande.jpeg";
import Registrera from "../../images/registrera.jpeg";
import Customers from "../../images/customers.png";

const HIW = () => {
  return (
    <>
      <div className="flexbox-hiw-outer-container">
        <div className="flexbox-hiw-inner-container">
          <div className="flexbox-hiw-heading-container">
            <h1 id="hiw-heading">Hur fungerar det?</h1>
          </div>
          <div className="flexbox-hiw-item-container">
            <div className="flexbox-hiw-item flexbox-hiw-item-1">
              <img src={Registrera} alt="hiw1" />
              <div className="flexbox-hiw-item-text-container">
                <div className="flexbox-hiw-item-text-heading-container">
                  <h2 id="hiw-item-heading">1. Fyll i dina uppgifter</h2>
                </div>
                <p id="hiw-item-paragraph-1">
                  För att vi ska kunna ge dig ett så bra bud som möjligt behöver
                  vi korrekta uppgifter om din bil. Börja därför med att fylla i
                  formuläret ovan. <br />
                  <br /> I dagsläget hanterar vi inte bilar som används i
                  kommersiellt syfte som exempelvis taxi, vi hanterar inte
                  heller privatimporterade fordon. Vi köper däremot in alla
                  svensk-sålda bilar, som gått under 18 000 mil och är max 12
                  år, oavsett märke!
                </p>
              </div>
            </div>
            <div className="flexbox-hiw-item flexbox-hiw-item-2">
              <img src={Erbjudande} alt="hiw2" />
              <div className="flexbox-hiw-item-text-container">
                <div className="flexbox-hiw-item-text-heading-container">
                  <h2 id="hiw-item-heading">2. Samtal och bud</h2>
                </div>
                <p id="hiw-item-paragraph-2">
                  Eftersom varje begagnad-bil är unik, kontaktar vi dig för en
                  kortare intervju. Detta sker senast 24 h efter du fyllt i
                  formuläret! Efter samtalet gör vi en analys av marknaden och
                  presenterar ett bud till dig. <br />
                  <br /> Värderingen av din bil är helt kostnadsfri och du
                  binder dig inte till någon affär. Väljer du att godkänna budet
                  bokar vi in en tid för kontroll och upphämtning av bilen.
                </p>
              </div>
            </div>
            <div className="flexbox-hiw-item flexbox-hiw-item-3">
              <img src={Customers} alt="hiw3" />
              <div className="flexbox-hiw-item-text-container">
                <div className="flexbox-hiw-item-text-heading-container">
                  <h2 id="hiw-item-heading">
                    3. Bilen kontroleras och hämtas upp
                  </h2>
                </div>
                {/* <div className="flexbox-hiw-item-line" /> */}
                <p id="hiw-item-paragraph-3">
                  Enligt överenskommelsen kommer en av våra fordonstestare hem
                  till dig och kontrollerar bilens skick. Så länge alla
                  uppgifter stämmer överens med det som uppgetts under
                  föregående intervju tar vi med oss bilen. Sedan görs en
                  banköverföring till ditt konto. <br />
                  <br /> Du har med andra ord gjort en affär snabbt, tryggt och
                  enkelt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HIW;
