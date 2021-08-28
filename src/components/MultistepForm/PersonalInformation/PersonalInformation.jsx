import React, { Component } from 'react'

export class PersonalInformation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, handleSubmit } = this.props;

    return (
      <div className="flexbox-personalinformation-outer-container">
        <div className="flexbox-personalinformation-form-container">
          <div className="flexbox-personalinformation-form-heading-container">
            <h2 id="personalinformation-heading">
              Fyll i uppgifterna för att få högst budet
            </h2>
            <p id="personalinformation-paragraph">
              Helt kostnadsfritt och ej bindande!
            </p>
          </div>
          <form onSubmit={handleSubmit} id="multistepform" name="multistepform">
            <div className="flexbox-personalinformation-form-label-input-container">
              <label htmlFor="registration">
                Registreringsnummer
                <input
                  id="registration"
                  name="registration"
                  type="text"
                  placeholder="ABC123"
                  value={values.registration}
                  onChange={handleChange("registration")}
                />
              </label>
              <label htmlFor="mileage">
                Miltal
                <input
                  id="mileage"
                  name="mielage"
                  type="number"
                  placeholder="10 000"
                  value={values.mileage}
                  onChange={handleChange("mileage")}
                />
              </label>
              <label htmlFor="tel">
                Telefon
                <input
                  id="tel"
                  name="tel"
                  type="number"
                  placeholder="0771 88 88 88"
                  value={values.tel}
                  onChange={handleChange("tel")}
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="du@dinmeil.se"
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </label>
            </div>
            <div className="flexbox-personalinformation-bottom-container">
              <button type="submit" id="form-submit-button">
                Ge mig högst bud!
              </button>
              <p id="contact-us-paragraph">
                Om du har några frågor är du alltid välkommen att kontakt oss på 000
                000 000
              </p>
            </div>
            <div className="flexbox-personalinformation-continue-button">
              <button type="button" onClick={this.continue}>Continue</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PersonalInformation;
