// Library Imports:
import "./carinformation.css";
import React, { Component } from "react";

// Component Imports:

// Image Imports:

export class CarInformation extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     vinterdack: "new",
  //     sommardack: "new",
  //     aretruntdack: "new"
  //   }
  //   this.doParentToggleFromChild = this.doParentToggleFromChild.bind(this);
  //   this.doParentToggleFromChild = this.doParentToggleFromChild.bind(this);
  //   this.values = this.props.values
  // }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  handleClick = e => {
    e.preventDefault();
    this.props.onClick(e);
  }

  // handleButton = (input) => (e) => {
  //   console.log("Hello")
  //   this.setState({ [input]: e.currentTarget.value });
  // }

  // handleButton = (e) => {
    // e.preventDefault();
    // const name = e.target.name;----
    // console.log(this.state)----
    // console.log(name) ---
    // console.log("initial state:", this.state.name)
    // console.log("target:" ,e.target)
    // console.log("name:", name)
    // console.log("this:", this);
    // console.log("props:", this.props.values.vinterdack)
    // this.setState({ [name]: "name" }); ---
    // console.log("updated state:", this.state.name)
    // console.log("vinterdack state:", this.state.vinterdack)
    // console.log("input", input)
  // }

  render() {
    const { values, handleSubmit, handleChange } = this.props;    

    return (
      <div className="flexbox-carinformation-outer-container">
        <div className="flexbox-carinformation-form-container">
          <div className="flexbox-carinformation-form-heading-container">
            <h2 id="carinformation-header">
              Tack för din förfrågan, snart få du bud från Sveriges
              största bilköpare
            </h2>
            <p id="carinformation-paragraph">
              För att du ska få ett så högt och rättvist bud som möjligt från
              våra ansluta handlare klicka i information om din bil nedan
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            id="multistepform"
            name="multistepform"
          >
            <div className="flexbox-carinformation-form-input-container">
              <div className="flexbox-carinformation-form-input">
                <div className="flexbox-carinformation-form-input-heading-container">
                  <h3 id="form-input-heading-hjul">Om dina hjul:</h3>
                  <p id="form-input-paragraph-hjul">
                    Obs: Varje valt alternativ räknar vi som en egen uppsättning
                    däck och fälg godkänk skick.
                  </p>
                </div>
                <div className="flexbox-carinformation-form-input-selections">
                  <button
                    type="button"
                    id="input-selection-sommardack"
                    name="sommardack"
                    value={values.sommardack}
                    onClick={this.handleClick}
                  >
                    Sommardäck
                  </button>
                  <button
                    type="button"
                    id="input-selection-vinterdack"
                    name="vinterdack"
                    value={values.vinterdack}
                    onClick={this.handleClick}
                  >
                    Vinterdäck
                  </button>
                  <button
                    type="button"
                    id="input-selection-aretruntdack"
                    name="aretruntdack"
                    value={values.aretruntdack}
                    onClick={this.handleClick}
                  >
                    Åretruntdäck
                  </button>
                </div>
              </div>
              <div className="flexbox-carinformation-form-input">
                <div className="flexbox-carinformation-form-input-heading-container">
                  <h3 id="form-input-heading-utrustning">
                    Värdehöjande utrustning:
                  </h3>
                </div>
                <div className="flexbox-carinformation-form-input-selections-container">
                  <div className="flexbox-carinformation-form-input-selections">
                    <button
                      type="button"
                      id="input-selection-helskinn"
                      name="helskinn"
                      value={values.helskinn}
                      onClick={this.handleClick}
                    >
                      Helskinn
                    </button>
                    <button
                      type="button"
                      id="input-selection-halvskinn"
                      name="halvskinn"
                      value={values.halvskinn}
                      onClick={this.handleClick}
                    >
                      Halvskinn eller alcantara
                    </button>
                    <button
                      type="button"
                      id="input-selection-dragkrok"
                      name="dragkrok"
                      value={values.dragkrok}
                      onClick={this.handleClick}
                    >
                      Dragkrok
                    </button>
                  </div>
                  <div className="flexbox-carinformation-form-input-selections">
                    <button
                      type="button"
                      id="input-selection-carplay"
                      name="carplay"
                      value={values.carplay}
                      onClick={this.handleClick}
                    >
                      Apple CarPlay eller Android Auto
                    </button>
                    <button
                      type="button"
                      id="input-selection-gps"
                      name="gps"
                      value={values.gps}
                      onClick={this.handleClick}
                    >
                      GPS - navigation (fungerande)
                    </button>
                    <button
                      type="button"
                      id="input-selection-bluetooth"
                      name="bluetooth"
                      value={values.bluetooth}
                      onClick={this.handleClick}
                    >
                      Bluetooth
                    </button>
                  </div>
                  <div className="flexbox-carinformation-form-input-selections">
                    <button
                      type="button"
                      id="input-selection-parkeringssensorerbak"
                      name="parkeringssensorerbak"
                      value={values.parkeringssensorerbak}
                      onClick={this.handleClick}
                    >
                      Parkeringssensorer bak
                    </button>
                    <button
                      type="button"
                      id="input-selection-parkeringssensorerfram"
                      name="parkeringssensorerfram"
                      value={values.parkeringssensorerfram}
                      onClick={this.handleClick}
                    >
                      Parkeringssensorer fram
                    </button>
                    <button
                      type="button"
                      id="input-selection-dieselvarmare"
                      name="dieselvarmare"
                      value={values.dieselvarmare}
                      onClick={this.handleClick}
                    >
                      Dieselvärmare (ej sladd)
                    </button>
                  </div>
                  <div className="flexbox-carinformation-form-input-selections">
                    <button
                      type="button"
                      id="input-selection-motorvarmare"
                      name="motorvarmare"
                      value={values.motorvarmare}
                      onClick={this.handleClick}
                    >
                      Motorvärme (sladd)
                    </button>
                    <button
                      type="button"
                      id="input-selection-taklucka"
                      name="taklucka"
                      value={values.taklucka}
                      onClick={this.handleClick}
                    >
                      Taklucka eller panoramaglas
                    </button>
                    <button
                      type="button"
                      id="input-selection-adaptiv"
                      name="adaptiv"
                      value={values.adaptiv}
                      onClick={this.handleClick}
                    >
                      Adaptiv farthållare
                    </button>
                  </div>
                </div>
              </div>
              <div className="flexbox-carinformation-form-input">
                <div className="flexbox-carinformation-form-input-heading-container">
                  <h3 id="form-input-heading-utrustning">Annan värdehöjande utrustning:</h3>
                  <p id="form-input-paragraph-utrustning">
                    Skriv gärna i vilket utrustningspaket din bil har, t.ex. S-line, R-Design, AMG, Executive-paket, eller liknande
                  </p>
                </div>
                <div className="flexbox-carinformation-form-input-textarea">
                  <textarea id="utrustning" name="utrustning" rows={5} cols={5} onChange={handleChange("utrustning")} ></textarea>
                </div>
              </div>
              <div className="flexbox-carinformation-form-input">
                <div className="flexbox-carinformation-form-input-heading-container">
                  <h3 id="form-input-heading-brister">Vanliga brister:</h3>
                </div>
                <div className="flexbox-carinformation-form-input-selections-container">
                  <div className="flexbox-carinformation-form-input-selections">
                    <button
                      type="button"
                      id="input-selection-service"
                      name="service"
                      value={values.service}
                      onClick={this.handleClick}
                    >
                      Dags för service (noll till tre mån kvar)
                    </button>
                    <button
                      type="button"
                      id="input-selection-serviehistorik"
                      name="serviehistorik"
                      value={values.serviehistorik}
                      onClick={this.handleClick}
                    >
                      Saknar eller bristfällig serviehistorik
                    </button>
                    <button
                      type="button"
                      id="input-selection-bilnyckel"
                      name="bilnyckel"
                      value={values.bilnyckel}
                      onClick={this.handleClick}
                    >
                      Finss bara en bilnyckel
                    </button>
                  </div>
                  <div className="flexbox-carinformation-form-input-selections">
                    <button
                      type="button"
                      id="input-selection-vindrutan"
                      name="vindrutan"
                      value={values.vindrutan}
                      onClick={this.handleClick}
                    >
                      Sprickor eller stenskott i vindrutan
                    </button>
                    <button
                      type="button"
                      id="input-selection-sommarslitna"
                      name="sommarslitna"
                      value={values.sommarslitna}
                      onClick={this.handleClick}
                    >
                      Sommardäcken är slitna
                    </button>
                    <button
                      type="button"
                      id="input-selection-sommarslitna"
                      name="sommarslitna"
                      value={values.sommarslitna}
                      onClick={this.handleClick}
                    >
                      Vinterdäcken är slitna
                    </button>
                  </div>
                  <div className="flexbox-carinformation-form-input-selections">
                    <button
                      type="button"
                      id="input-selection-aretruntslitna"
                      name="aretruntslitna"
                      value={values.aretruntslitna}
                      onClick={this.handleClick}
                    >
                      Åretruntdäcken är slitna
                    </button>
                    <button
                      type="button"
                      id="input-selection-tobak"
                      name="tobak"
                      value={values.tobak}
                      onClick={this.handleClick}
                    >
                      Luktar tobaksrök i bilen
                    </button>
                    <button
                      type="button"
                      id="input-selection-djurpals"
                      name="djurpals"
                      value={values.djurpals}
                      onClick={this.handleClick}
                    >
                      Finns tydliga spår av pälsdjur
                    </button>
                  </div>
                </div>
              </div>
              <div className="flexbox-carinformation-form-input">
                <div className="flexbox-carinformation-form-input-heading-container">
                  <h3 id="form-input-heading-kbrister">Kända brister:</h3>
                  <p id="form-input-paragraph-kbrister">
                    Vad hade du reagerat på om du såg den här bilen i en bilhall? Scrapmärken, rost eller missljud? Du behöver inte tänka på renlighet, köparna räknar med att tvätta och polera bilen.
                  </p>
                </div>
                <div className="flexbox-carinformation-form-input-textarea">
                  <textarea id="kbrister" name="kbrister" rows={5} cols={5} onChange={handleChange("kbrister")} ></textarea>
                </div>
              </div>
              <div className="flexbox-carinformation-form-input">
                <div className="flexbox-carinformation-form-input-heading-container">
                  <h3 id="form-input-heading-lamna">När är du redo att lämna ifrån dig bilen?:</h3>
                  <p id="form-input-paragraph-lamna">
                    Givet att priset är rätt och att du vill gå vidare med en affär.
                  </p>
                </div>
                <div className="flexbox-carinformation-form-input-selections-lamna">
                  <button
                    type="button"
                    id="input-selection-narsomhelst"
                    name="narsomhelst"
                    value={values.narsomhelst}
                    onClick={this.handleClick}
                  >
                    När som helst
                  </button>
                  <button
                    type="button"
                    id="input-selection-onetwoweeks"
                    name="onetwoweeks"
                    value={values.onetwoweeks}
                    onClick={this.handleClick}
                  >
                    En till två veckor
                  </button>
                  <button
                    type="button"
                    id="input-selection-threefourweeks"
                    name="threefourweeks"
                    value={values.threefourweeks}
                    onClick={this.handleClick}
                  >
                    Tre till fyra veckor
                  </button>
                  <button
                    type="button"
                    id="input-selection-hitta"
                    name="hitta"
                    value={values.hitta}
                    onClick={this.handleClick}
                  >
                    Måste hitta en ny bil först
                  </button>
                </div>
              </div>
              <div className="flexbox-carinformation-form-input">
                <div className="flexbox-carinformation-form-input-heading-container">
                  <h3 id="form-input-heading-pris">Önskat lägsta reservations pris:</h3>
                </div>
                <div className="flexbox-carinformation-form-input-textarea-price">
                  <textarea id="price" name="price" rows={1} cols={1} onChange={handleChange("price")} ></textarea>
                </div>
              </div>
            </div>
            {/* <div className="flexbox-personalinformation-continue-button">
              <button type="button" onClick={this.continue}>Continue</button>
            </div> */}
            <div className="flexbox-carinformation-button-container">
              <button type="button" onClick={this.back}>Back</button>
              <button type="submit" form="multistepform">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CarInformation;
