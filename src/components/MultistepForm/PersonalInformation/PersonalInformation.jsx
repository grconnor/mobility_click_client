// Library Imports:
import "./personalinformation.css";
import React, { Component } from "react";

// Component Imports:

// Image Imports:

export class PersonalInformation extends Component {
  state = {
    loading: false,
  };

  continue = (e) => {
    // e.preventDefault();
    this.props.nextStep();
  };

  timeoutFunction = (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    setTimeout(() => {
      this.setState({ loading: false });
      this.continue();
      // const successDiv = document.getElementById(
      //   "flexbox-success-outer-container"
      // );
      // if (successDiv) {
      //   console.log("Form Submitted, removing top text");
      //   const topText = document.getElementById("flexbox-main-salja-text-container");
      //   topText.style.border="2px solid red";
      // } else {
      //   console.log("Form has not been submitted yet.");
      // }
    }, 1000);
    // setTimeout(() => {
    //   const successDiv = document.getElementsByClassName(
    //     "flexbox-success-outer-container"
    //   );
    //   console.log("successDiv", successDiv);
    //   if (successDiv) {
    //     console.log("Form Submitted, removing top text");
    //     const topText = document.getElementsByClassName("flexbox-main-salja-container");
    //     console.log("topText:", topText);
    //     topText.style.display="none";
    //   } else {
    //     console.log("Form has not been submitted yet.");
    //   }
    // }, 1500)
  };

  render() {
    const { values, handleChange, handleSubmit } = this.props;
    const { loading } = this.state;

    return (
      // <div className="flexbox-personalinformation-outer-container">
      <>
        <div className="flexbox-hero-outer-container">
          <div className="flexbox-main-salja-inner-container">
            <div className="flexbox-main-salja-text-heading-container">
              <h1 id="salja-heading">
                Sälj din bil. Snabbt, tryggt och enkelt.
              </h1>
            </div>
            <div className="flexbox-main-salja-text-heading-paragraph-container">
              <p id="salja-heading-paragraph">
                Vi köper in svensksålda bilar oavsett märke, som gått under 18
                000 mil och är max 12 år gammal.
              </p>
            </div>
          </div>
          <div className="flexbox-personalinformation-form-container">
            <div className="flexbox-personalinformation-form-heading-container">
              <h2 id="personalinformation-heading">
                Fyll i uppgifterna för bästa bud
              </h2>
              <p id="personalinformation-paragraph">
                Helt kostnadsfritt och ej bindande!
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              id="multistepform"
              name="multistepform"
            >
              <div className="flexbox-personalinformation-form-label-input-container">
                <div className="flexbox-personalinformation-form-label-input-wrapper">
                  <label htmlFor="registration">
                    Ditt registreringsnummer:
                  </label>
                  <input
                    id="registration"
                    name="registration"
                    type="text"
                    placeholder="ABC123"
                    value={values.registration}
                    onChange={handleChange("registration")}
                    required
                  />
                </div>
                <div className="flexbox-personalinformation-form-label-input-wrapper">
                  <label htmlFor="mileage">Miltal:</label>
                  <input
                    id="mileage"
                    name="mileage"
                    type="number"
                    placeholder="10 000 ( max 18 000 mil )"
                    value={values.mileage}
                    onChange={handleChange("mileage")}
                    required
                  />
                </div>
                <div className="flexbox-personalinformation-form-label-input-wrapper">
                  <label htmlFor="tel">Ditt telefonnummer:</label>
                  <input
                    id="tel"
                    name="tel"
                    type="number"
                    placeholder="071 888 8888"
                    value={values.tel}
                    onChange={handleChange("tel")}
                    required
                  />
                </div>
                {/* <div className="flexbox-personalinformation-form-label-input-wrapper">
                    <label htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="du@dinmeil.se"
                      value={values.email}
                      onChange={handleChange("email")}
                    />
                  </div> */}
              </div>
              <div className="flexbox-personalinformation-bottom-container">
                <button
                  className="personalinformation-button"
                  type="submit"
                  // onClick={this.timeoutFunction}
                  // onClick={this.continue}
                  disabled={loading}
                >
                  {loading && (
                    <i
                      className="fa fa-refresh fa-spin"
                      style={{ marginRight: "5px" }}
                    />
                  )}
                  {!loading && <span>Skicka</span>}
                  {loading && <span>Skickar förfrågan</span>}
                </button>
                <div className="flexbox-personalinformation-bottom-paragraph-container">
                  <p id="contact-us-paragraph">
                    Om du har några frågor är du alltid välkommen att kontakta
                    oss på <a href="tel:+46101646595">Tel: 010 -164 65 95</a>
                  </p>
                </div>
              </div>
              {/* <div className="flexbox-personalinformation-continue-button">
                  <button type="button" onClick={this.continue}>Continue</button>
                </div> */}
            </form>
          </div>
        </div>
      </>
      // </div>
    );
  }
}

export default PersonalInformation;
