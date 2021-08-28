// Library Imports:
import React, { Component } from "react";

// Component Imports:
import CarInformation from "./CarInfomation/CarInformation";
import PersonalInformation from "./PersonalInformation/PersonalInformation";

// Image Imports:


export default class Form extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     step: 1,
  //     registration: "",
  //     mileage: "",
  //     tel: "",
  //     email: "",
  //     vinterdack: "-",
  //     sommardack: "-",
  //     aretruntdack: "-"
  //   }
  //   // this.doParentToggle = this.doParentToggle.bind(this);
  // }

  state = {
    step: 1,
    registration: "",
    mileage: "",
    tel: "",
    email: "",
    vinterdack: "-",
    sommardack: "-",
    aretruntdack: "-",
    status: "Submit"
    // clicked: false
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle field changes
  handleChange = (input) => (e) => {
    const name = e.target.name
    this.setState({ [name]: e.target.value });
  };

  onClick = (e) => {
    // console.log("name:", name);
    // console.log("target", e.target)
    const name = e.target.name;
    if (e.target.value === "-") {
      this.setState({ [name]: e.target.name})
      e.target.style.backgroundColor = "green";
    } else {
      this.setState({ [name]: "-"})
      e.target.style.backgroundColor = "red"
    }
    // console.log("e.target.value", e.target.value);
    // console.log("this.state:", this.state);
  }

  render() {
    const { step } = this.state;
    const { registration, mileage, tel, email, vinterdack, sommardack, aretruntdack } = this.state;
    // console.log("this.state", this.state)
    const values = { registration, mileage, tel, email, vinterdack, sommardack, aretruntdack };
    // eslint-disable-next-line no-unused-vars
    // const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      this.setState({ status: "Sending"});
      // setStatus("Sending...");

      let details = {
        registration: values.registration,
        mileage: values.mileage,
        tel: values.tel,
        email: values.email,
        vinterdack: values.vinterdack,
        sommardack: values.sommardack,
        aretruntdack: values.aretruntdack
      };
      let response = await fetch("http://localhost:5000/vardera-din-bil", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      // setStatus("Submit");
      this.setState({status: "Submit"});
      let result = await response.json();
      alert(result.status);
      console.log(result.status)
    };

    switch (step) {
      case 1:
        return (
          <PersonalInformation
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            // onSubmit={handleSubmit}
            handleSubmit={handleSubmit}
            // onClick={this.handleButton}
          />
        );
      case 2:
        return (
          <CarInformation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onClick={this.onClick}
            values={values}
            // onSubmit={handleSubmit}
            handleSubmit={handleSubmit}
            // onClick={this.handleButtonChange}
          />
        );
      default:
      // Do nothing
      console.log("MultiStep form built with React.")
    }

    // return (
    //   <div>
    //     <h1>MultiStep Form</h1>
    //   </div>
    // );
  }
}
