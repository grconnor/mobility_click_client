// Library Imports:
import "./omoss.css";
import React from "react";

// Component Imports:

// Image Imports:
import Blank from "../../images/blank_photo.png";


const OmOss = () => {
  return (
    <>
      <div className="flexbox-omoss-outer-container">
        <div className="flexbox-omoss-outer-text-container">
          <div className="flexbox-omoss-heading-container">
            <div className="flexbox-omoss-heading-header-container">
              <h2 id="omoss-heading">
                Om Oss
              </h2>
            </div>
            <div className="hr-line">&nbsp;</div>
            <div className="flexbox-omoss-heading-paragraph-container">
              <p id="heading-paragraph">
                Vi är en del av Mobility Motors koncernen, om du vill veta mer så kan du <a href="https://www.mmgroup.se/">Klicka Här</a>
              </p>
            </div>
          </div>
          {/* <div className="flexbox-omoss-vemarvi-paragraph-container">
            <div className="flexbox-omoss-vemarvi-paragraph-heading-container">
              <h2 id="omoss-paragraph-heading">
                Vilka Är Vi
              </h2>
              <div className="hr-line">&nbsp;</div>
            </div>
            <div className="flexbox-omoss-vemarvi-paragraph-wrapper">

            </div>
          </div> */}
          <div className="flexbox-omoss-vilka-container">
            <div className="flexbox-omoss-vilka-heading-container">
              <h2 id="omoss-vilka-heading">
                Vilka Är Vi
              </h2>
            </div>
            <div className="flexbox-omoss-vilka-paragraph-container">
              <p id="omoss-vilka-heading-paragraph">
                Det här är oss på MMGroup Inköp
              </p>
            </div>
            <div className="flexbox-omoss-vilka-card-container">
              <div className="flexbox-omoss-vilka-top-card-container">
                <div className="flexbox-omoss-vilka-top-card flexbox-omoss-vilka-card-top-1">
                  <img src={Blank} alt="inkop-1" />
                  <h2 id="card-name">
                    James Anonymous
                  </h2>
                  <h3 id="card-title">
                    Ingen vet
                  </h3>
                  <h3 id="card-telephone">
                    Telefonnummer
                  </h3>
                  <h3 id="card-number">
                    Har inte ett nummer
                  </h3>
                </div>
                <div className="flexbox-omoss-vilka-top-card flexbox-omoss-vilka-card-top-2">
                  <img src={Blank} alt="inkop-2" />
                  <h2 id="card-name">
                    Mikael Engdahl
                  </h2>
                  <h3 id="card-title">
                    Inköpschef
                  </h3>
                  <h3 id="card-telephone">
                    Telefonnummer
                  </h3>
                  <h3 id="card-number">
                    07640404040
                  </h3>
                </div>
                <div className="flexbox-omoss-vilka-top-card flexbox-omoss-vilka-card-top-3">
                  <img src={Blank} alt="inkop-3" />
                  <h2 id="card-name">
                    Connor Roelofsen
                  </h2>
                  <h3 id="card-title">
                    Inköpschef
                  </h3>
                  <h3 id="card-telephone">
                    Telefonnummer
                  </h3>
                  <h3 id="card-number">
                    07640404040
                  </h3>
                </div>
              </div>
              <div className="flexbox-omoss-vilka-bottom-card-container">
                <div className="flexbox-omoss-vilka-bottom-card flexbox-omoss-vilka-bottom-card-4">
                  <img src={Blank} alt="inkop-4" />
                  <h2 id="card-name">
                    Christina Palomares
                  </h2>
                  <h3 id="card-title">
                    Inköpschef
                  </h3>
                  <h3 id="card-telephone">
                    Telefonnummer
                  </h3>
                  <h3 id="card-number">
                    07640404040
                  </h3>
                  <button id="card-button" type="button">
                    <a href="mailto:christina@mmbil.se" />
                  </button>
                </div>
                <div className="flexbox-omoss-vilka-bottom-card flexbox-omoss-vilka-bottom-card-5">
                  <img src={Blank} alt="inkop-5" />
                  <h2 id="card-name">
                    Dimitrios Lenis
                  </h2>
                  <h3 id="card-title">
                    Inköpschef
                  </h3>
                  <h3 id="card-telephone">
                    Telefonnummer
                  </h3>
                  <h3 id="card-number">
                    07640404040
                  </h3>
                </div>
                <div className="flexbox-omoss-vilka-bottom-card flexbox-omoss-vilka-bottom-card-6">
                  <img src={Blank} alt="inkop-6" />
                  <h2 id="card-name">
                    Hans Blennow
                  </h2>
                  <h3 id="card-title">
                    Inköpschef
                  </h3>
                  <h3 id="card-telephone">
                    Telefonnummer
                  </h3>
                  <h3 id="card-number">
                    07640404040
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OmOss
