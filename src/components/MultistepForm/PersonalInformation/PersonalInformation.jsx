// Library Imports:
import "./personalinformation.css";
import React, { Component } from "react";

// Component Imports:

// Image Imports:


export class PersonalInformation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, handleSubmit } = this.props;

    return (
      // <div className="flexbox-personalinformation-outer-container">
        <div className="flexbox-personalinformation-form-container">
          <div className="flexbox-personalinformation-form-heading-container">
            <h2 id="personalinformation-heading">
              Fyll i uppgifterna för högsta bud
            </h2>
            <p id="personalinformation-paragraph">
              Helt kostnadsfritt och ej bindande!
            </p>
          </div>
          <form onSubmit={handleSubmit} id="multistepform" name="multistepform">
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
                />
              </div>
              <div className="flexbox-personalinformation-form-label-input-wrapper">
                <label htmlFor="mileage">
                  Miltal:
                </label>
                <input
                  id="mileage"
                  name="mileage"
                  type="number"
                  placeholder="10 000 ( max 18 000 mil )"
                  value={values.mileage}
                  onChange={handleChange("mileage")}
                />
              </div>
              <div className="flexbox-personalinformation-form-label-input-wrapper">
                <label htmlFor="tel">
                  Ditt telefonnummer:
                </label>
                <input
                  id="tel"
                  name="tel"
                  type="number"
                  placeholder="071 888 8888"
                  value={values.tel}
                  onChange={handleChange("tel")}
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
              <button type="button" onClick={this.continue}>Skicka</button>
              <p id="contact-us-paragraph">
                Om du har några frågor är du alltid välkommen att kontakt oss på 08-643 00 00
              </p>
            </div>
            {/* <div className="flexbox-personalinformation-continue-button">
              <button type="button" onClick={this.continue}>Continue</button>
            </div> */}
          </form>
        </div>
      // </div>
    );
  }
}

export default PersonalInformation;
