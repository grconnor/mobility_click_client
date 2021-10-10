// Library Imports:
import "./omoss.css";
import React from "react";

// Component Imports:
// import Map from "../Map/Map";
// import { Marker } from "google-map-react";
import MapContainer from "../MapContainer/MapContainer";

// Image Imports:
// import BG from "../../images/BG.jpeg";
import Blank from "../../images/blank_photo.png";
import James from "../../images/inkop/James.png";
import Fredrik from "../../images/inkop/Fredrik.png";
import Antonio from "../../images/inkop/Antonio.png";
import Mikael from "../../images/inkop/Mikael.png";
import Isac from "../../images/inkop/Isac.png";

const OmOss = () => {
  return (
    <>
      <div className="flexbox-omoss-outer-container">
        <div className="flexbox-omoss-outer-text-container">
          <div className="flexbox-omoss-heading-container">
            <div className="flexbox-omoss-heading-opacity-container">
              <div className="flexbox-omoss-heading-header-container">
                <h1 id="omoss-heading">Om Oss</h1>
              </div>
              <div className="hr-line">&nbsp;</div>
              <div className="flexbox-omoss-heading-paragraph-container">
                <p id="heading-paragraph">
                  BudPåDinBil.se är en del av familjeägda Mobility Motors
                  koncernen. Idag finns vi på tio olika anläggningar runt om i
                  landet. Mobility Motors är auktoriserade återförsäljare av
                  Nissan, Isuzu, Maxus, Citroen, Peugeot, Opel, Mercedes och
                  Hyundai. Utöver det erbjuder vi flertalet begagnade bilar. Vi
                  har helt enkelt något som passar alla! Om du vill veta mer så
                  kan du <a href="https://www.mmgroup.se/">Klicka Här</a>.
                </p>
              </div>
              {/* <div className="flexbox-omoss-vilka-heading-container">
                <div className="flexbox-omoss-vilka-heading-header-container">
                  <h2 id="omoss-vilka-heading">Vilka Är Vi</h2>
                </div>
              </div>
              <div className="hr-line">&nbsp;</div>
              <div className="flexbox-omoss-vilka-paragraph-container-wrapper">
                <div className="flexbox-omoss-vilka-paragraph-container">
                  <p id="omoss-vilka-heading-paragraph">
                    Det är här vi befinner oss och under det så är det vi som jobbar här på Mobility Motors Inköp.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="flexbox-omoss-anlaggningar-container">
            <div className="flexbox-omoss-anlaggningar-heading-container">
              <h2 id="omoss-anlaggningar-heading">
                Våra Anläggningar
              </h2>
            </div>
            <div className="hra-line">&nbsp;</div>
          </div>
          <div className="flexbox-omoss-map-container">
            <MapContainer />
          </div>
          <div className="flexbox-omoss-vilka-card-container">
            <div className="flexbox-omoss-vilka-top-card-container">
              <div className="flexbox-omoss-vilka-top-card flexbox-omoss-vilka-card-top-1">
                <img src={James} alt="inkop-1" />
                <h2 id="card-name">James</h2>
                <h3 id="card-title">Inköpschef</h3>
                <h2 id="card-telephone">Telefonnummer:</h2>
                <h3 id="card-number">Har inte ett nummer</h3>
              </div>
              <div className="flexbox-omoss-vilka-top-card flexbox-omoss-vilka-card-top-2">
                <img src={Mikael} alt="inkop-2" />
                <h2 id="card-name">Mikael</h2>
                <h3 id="card-title">Inköpschef</h3>
                <h2 id="card-telephone">Telefonnummer</h2>
                <h3 id="card-number">07640404040</h3>
              </div>
              <div className="flexbox-omoss-vilka-top-card flexbox-omoss-vilka-card-top-3">
                <img src={Fredrik} alt="inkop-3" />
                <h2 id="card-name">Fredrik</h2>
                <h3 id="card-title">Inköpschef</h3>
                <h2 id="card-telephone">Telefonnummer:</h2>
                <h3 id="card-number">07640404040</h3>
              </div>
            </div>
            <div className="flexbox-omoss-vilka-bottom-card-container">
              <div className="flexbox-omoss-vilka-bottom-card flexbox-omoss-vilka-bottom-card-4">
                <img src={Isac} alt="inkop-4" />
                <h2 id="card-name">Isac</h2>
                <h3 id="card-title">Inköpschef</h3>
                <h2 id="card-telephone">Telefonnummer:</h2>
                <h3 id="card-number">07640404040</h3>
                <button id="card-button" type="button">
                  <a href="mailto:christina@mmbil.se" />
                </button>
              </div>
              <div className="flexbox-omoss-vilka-bottom-card flexbox-omoss-vilka-bottom-card-5">
                <img src={Antonio} alt="inkop-5" />
                <h2 id="card-name">Antonio</h2>
                <h3 id="card-title">Inköpschef</h3>
                <h2 id="card-telephone">Telefonnummer:</h2>
                <h3 id="card-number">07640404040</h3>
              </div>
              <div className="flexbox-omoss-vilka-bottom-card flexbox-omoss-vilka-bottom-card-6">
                <img src={Blank} alt="inkop-6" />
                <h2 id="card-name">Hans Blennow</h2>
                <h3 id="card-title">Inköpschef</h3>
                <h2 id="card-telephone">Telefonnummer:</h2>
                <h3 id="card-number">07640404040</h3>
              </div>
            </div>
          </div>
        </div>
        {/* <Map /> */}
      </div>
    </>
  );
};

export default OmOss;
