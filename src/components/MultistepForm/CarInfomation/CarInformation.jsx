import React, { Component } from "react";

export class CarInformation extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   vinterdack: "new",
  //   //   sommardack: "new",
  //   //   aretruntdack: "new"
  //   // }
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
    // if (e.ta) {
      
    // }
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
    const { values, handleSubmit } = this.props;    

    return (
      <div className="flexbox-carinformation-outer-container">
        <div className="flexbox-carinformation-form-container">
          <div className="flexbox-carinformation-form-heading container">
            <h2 id="carinformation-header">
              Tack för din förfrågan, snart kommer du få bud från Sveriges
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
                  <h2 id="form-input-heading-hjul">Om dina hjul</h2>
                  <p id="form-input-paragraph">
                    Obs: Varje valt alternativ räknar vi som en egen uppsättning
                    däck och fälg godkänk skick.
                  </p>
                </div>
                <div className="flexbox-carinformation-form-input-selections">
                  <button
                    type="button"
                    id="input-selection-sommardack"
                    name="sommardack"
                    // value="sommardack"
                    // onClick={() => selectionClicked("sommardack")}
                    // onClick={e => this.selectionClicked(e, "value")}
                    value={values.sommardack}
                    onClick={this.handleClick}
                  >
                    Sommardäck
                  </button>
                  <button
                    type="button"
                    id="input-selection-vinterdack"
                    name="vinterdack"
                    // value="vinterdack"
                    // onClick={selectionClicked()}
                    value={values.vinterdack}
                    onClick={this.handleClick}
                  >
                    Vinterdäck
                  </button>
                  <button
                    type="button"
                    id="input-selection-aretruntdack"
                    name="aretruntdack"
                    // value="aretruntdack"
                    // onClick={selectionClicked()}
                    value={values.aretruntdack}
                    onClick={this.handleClick}
                  >
                    Åretruntdäck
                  </button>
                </div>
              </div>
              <div className="flexbox-carinformation-form-input"></div>
              <div className="flexbox-carinformation-form-input"></div>
            </div>
            {/* <div className="flexbox-personalinformation-continue-button">
              <button type="button" onClick={this.continue}>Continue</button>
            </div> */}
            <div className="flexbox-personalinformation-back-button">
              <button type="button" onClick={this.back}>Back</button>
            </div>
            <button type="submit" form="multistepform">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CarInformation;
