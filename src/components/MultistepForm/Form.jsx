// Library Imports:
import React, { Component } from "react";

// Component Imports:
import Success from "./Success/Success";
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
    // vinterdack: "-",
    // sommardack: "-",
    // aretruntdack: "-",
    // helskinn: "-",
    // halvskinn: "-",
    // dragkrok: "-",
    // carplay: "-",
    // gps: "-",
    // bluetooth: "-",
    // parkeringssensorerbak: "-",
    // parkeringssensorerfram: "-",
    // dieselvarmare: "-",
    // motorvarmare: "-",
    // taklucka: "-",
    // adaptiv: "-",
    // utrustning: "",
    // service: "-",
    // serviehistorik: "-",
    // bilnyckel: "-",
    // vindrutan: "-",
    // sommarslitna: "-",
    // vinterslitna: "-",
    // aretruntslitna: "-",
    // tobak: "-",
    // djurpals: "-",
    // kbrister: "",
    // hitta: "-",
    narsomhelst: "-",
    onetwoweeks: "-",
    threefourweeks: "-",
    status: "Submit",
    price: ""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
    window.scrollTo(0, 0);
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
    window.scrollTo(0, 0);
  };

  // Handle field changes
  handleChange = (input) => (e) => {
    const name = e.target.name
    this.setState({ [name]: e.target.value });
  };

  // Handle button clicks
  onClick = (e) => {
    console.log("target", e.target)
    console.log("value", e.target.value)
    const name = e.target.name;
    if (e.target.value === "-") {
      this.setState({ [name]: e.target.name})
      e.target.style.backgroundColor = "green";
      // e.target.style.color = "white";
    } else {
      this.setState({ [name]: "-"})
      e.target.style.backgroundColor = "rgb(160, 33, 33)"
    }
  }

  render() {
    const { step } = this.state;
    const { registration, mileage, tel, email, narsomhelst, onetwoweeks, threefourweeks, price } = this.state;
    const values = { registration, mileage, tel, email, narsomhelst,onetwoweeks, threefourweeks, price };
    console.log("values.registration:", values.registration)
    // const [status, setStatus] = useState("Submit");
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      this.setState({ status: "Sending"});
      // localStorage.setItem("registration", registration);
      // localStorage.setItem("email", email);
      // setStatus("Sending...");

      let details = {
        registration: values.registration,
        mileage: values.mileage,
        tel: values.tel,
        email: values.email,
        // vinterdack: values.vinterdack,
        // sommardack: values.sommardack,
        // aretruntdack: values.aretruntdack,
        // helskinn: values.helskinn,
        // halvskinn: values.halvskinn,
        // dragkrok: values.dragkrok,
        // carplay: values.carplay,
        // gps: values.gps,
        // bluetooth: values.bluetooth,
        // parkeringssensorerbak: values.parkeringssensorerbak,
        // parkeringssensorerfram: values.parkeringssensorerfram,
        // dieselvarmare: values.dieselvarmare,
        // motorvarmare: values.motorvarmare,
        // taklucka: values.taklucka,
        // adaptiv: values.adaptiv,
        // utrustning: values.utrustning,
        // service: values.service,
        // serviehistorik: values.serviehistorik,
        // bilnyckel: values.bilnyckel,
        // vindrutan: values.vindrutan,
        // sommarslitna: values.sommarslitna,
        // vinterslitna: values.vinterslitna,
        // aretruntslitna: values.aretruntslitna,
        // tobak: values.tobak,
        // djurpals: values.djurpals,
        // kbrister: values.kbrister,
        narsomhelst: values.narsomhelst,
        onetwoweeks: values.onetwoweeks,
        threefourweeks: values.threefourweeks,
        // hitta: values.hitta,
        price: values.price
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
      console.log("result.status:", result.status)
    };

    switch (step) {
      case 1:
        return (
          <PersonalInformation
            nextStep={this.nextStep}
            values={values}
            handleChange={this.handleChange}
            handleSubmit={handleSubmit}
            // onSubmit={handleSubmit}
            // onClick={this.handleButton}
          />
        );
      case 2:
        return (
          <Success />
        );
      default:
      // Do nothing
      console.log("MultiStep form built with React.")
    }
  }
}
