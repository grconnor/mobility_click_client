// Library Imports:
import "./omoss.css";
import React, { useEffect } from "react";

// Component Imports:
import MapContainer from "../MapContainer/MapContainer";

// Image Imports:
// import Antonio from "../../images/inkop/Antonio.png";
import Blank from "../../images/blank_photo.png";
import James from "../../images/inkop/James.png";
import Fredrik from "../../images/inkop/Fredrik.png";
import Mikael from "../../images/inkop/Mikael.png";
import Isac from "../../images/inkop/Isac.png";
import { GaPageView } from "../..";
import CommonPageHeadContent from "../CommonPageHeadContent/CommonPageHeadContent";

const OmOss = () => {

  useEffect(() => { GaPageView("Om oss"); }, []);

  return (
    <>
      <CommonPageHeadContent title="Om oss" description="om oss" />
      <section>
        <div className="flexbox-omoss-outer-container">
          <div className="flexbox-omoss-outer-text-container">
            <div className="flexbox-omoss-heading-container">
              <div className="flexbox-omoss-heading-header-container">
                <h1 id="omoss-heading">Om Oss</h1>
              </div>
              <div className="flexbox-omoss-heading-paragraph-container">
                <p id="heading-paragraph">
                  BudPåDinBil.se är en del av familjeägda Mobility Motors
                  koncernen. Idag finns vi på tio olika anläggningar runt om i
                  landet. Mobility Motors är auktoriserade återförsäljare av
                  Nissan, Isuzu, Mazda, Maxus, Citroen, Peugeot, Opel, Mercedes och
                  Hyundai. Utöver det erbjuder vi flertalet begagnade bilar. Vi
                  har helt enkelt något som passar alla! Om du vill veta mer så
                  kan du <a href="https://www.mbil.se/om-oss/om-mobility-motors">Klicka Här</a>.
                </p>
              </div>
            </div>
            <div className="flexbox-omoss-anlaggningar-container">
              <div className="flexbox-omoss-anlaggningar-heading-container">
                <h2 id="omoss-anlaggningar-heading">
                  Våra Anläggningar
                </h2>
                <p id="omoss-anlaggningar-paragraph">
                  Nedan hittar du våra anläggningar, välkommen till oss!
                </p>
              </div>
            </div>
            <div className="flexbox-omoss-map-container">
              <MapContainer />
            </div>
            <div className="flexbox-omoss-vilka-card-container">
              <div className="flexbox-omoss-vilka-heading-container">
                <div className="flexbox-omoss-vilka-heading-header-container">
                  <h2 id="omoss-team-heading">
                    Vårt Team
                  </h2>
                </div>
              </div>
              <div className="flexbox-omoss-vilka-top-card-container">
                <div className="flexbox-omoss-vilka-top-card flexbox-omoss-vilka-card-top-1">
                  <img src={James} alt="inkop-1" />
                  <div className="flexbox-omoss-vilka-card-text-container">
                    <h1 id="card-name">James</h1>
                    <h2 id="card-telephone">Inköpare </h2>
                    <a href="tel:+46101646595">Tel: 010-164 65 95</a>
                  </div>
                </div>
                <div className="flexbox-omoss-vilka-top-card flexbox-omoss-vilka-card-top-2">
                  <img src={Mikael} alt="inkop-2" />
                  <div className="flexbox-omoss-vilka-card-text-container">
                    <h1 id="card-name">Mikael</h1>
                    <h2 id="card-telephone">Inköpschef </h2>
                    <a href="tel:+46852270381">Tel: 085-227 03 81</a>
                  </div>
                </div>
                <div className="flexbox-omoss-vilka-top-card flexbox-omoss-vilka-card-top-3">
                  <img src={Fredrik} alt="inkop-3" />
                  <div className="flexbox-omoss-vilka-card-text-container">
                    <h1 id="card-name">Fredrik</h1>
                    <h2 id="card-telephone">Inköpare </h2>
                    <a href="tel:+4686032722">Tel: 086-032 722</a>
                  </div>
                </div>
              </div>
              <div className="flexbox-omoss-vilka-bottom-card-container">
                <div className="flexbox-omoss-vilka-bottom-card flexbox-omoss-vilka-bottom-card-4">
                  <img src={Isac} alt="inkop-4" />
                  <div className="flexbox-omoss-vilka-card-text-container">
                    <h1 id="card-name">Isac</h1>
                    <h2 id="card-telephone">Inköpare </h2>
                    <a href="tel:+46852270382">Tel: 085-227 03 82</a>
                  </div>
                </div>
                <div className="flexbox-omoss-vilka-bottom-card flexbox-omoss-vilka-bottom-card-5">
                  <img src={Blank} alt="inkop-5" />
                  <div className="flexbox-omoss-vilka-card-text-container">
                    <h1 id="card-name">Daniel Turesson</h1>
                    <h2 id="card-telephone">Inköpare </h2>
                    <a href="tel:+4686032729">Tel: 086-032 708</a>
                  </div>
                </div>
                <div className="flexbox-omoss-vilka-bottom-card flexbox-omoss-vilka-bottom-card-6">
                  <img src={Blank} alt="inkop-6" />
                  <div className="flexbox-omoss-vilka-card-text-container">
                    <h1 id="card-name">Alexander</h1>
                    <h2 id="card-telephone">Inköpare </h2>
                    <a href="tel:+46101646595">Tel: 010-164 65 95</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Map /> */}
        </div>
      </section>
    </>
  );
};

export default OmOss;
