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
    loading: false,
    // email: "",
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
    // narsomhelst: "-",
    // onetwoweeks: "-",
    // threefourweeks: "-",
    // price: "",
    status: "Submit",
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
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleButton = (e) => {
    console.log("Triggered handleButton function");
  };

  // Handle button clicks
  onClick = (e) => {
    console.log("target", e.target);
    console.log("value", e.target.value);
    const name = e.target.name;
    if (e.target.value === "-") {
      this.setState({ [name]: e.target.name });
      e.target.style.backgroundColor = "green";
      // e.target.style.color = "white";
    } else {
      this.setState({ [name]: "-" });
      e.target.style.backgroundColor = "rgb(160, 33, 33)";
    }
  };

  render() {
    const { step } = this.state;
    const { registration, mileage, tel, status } = this.state;
    const values = { registration, mileage, tel };
    const { loading } = this.state;

    // console.log("values.registration: ", values.registration);
    // const [status, setStatus] = useState("Submit");

    // const successDiv = document.getElementById(
    //   "flexbox-success-outer-container"
    // );
    // if (successDiv) {
    //   console.log("Form Submitted, removing top text");
    //   const topText = document.getElementById(
    //     "flexbox-main-salja-text-container"
    //   );
    //   topText.style.border = "2px solid red";
    // } else {
    //   console.log("Form has not been submitted yet.");
    // }

    const handleSubmit = async (e) => {
      console.log("Triggered form handleSubmit");
      e.preventDefault();
      this.setState({ status: "Sending" });
      this.setState({ step: 2 });
      const serviceID = "service_h9n5zib";
      const templateID = "lead_form";
      const templateParams = {
        registration: values.registration,
        tel: values.tel,
        mileage: values.mileage,
      };
      window.emailjs.send(serviceID, templateID, templateParams).then(
        function (response) {
          console.log("SUCCESS!", response, response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    };

    const xhandleSubmit = async (e) => {
      console.log("Triggered form handleSubmit");
      e.preventDefault();
      this.setState({ status: "Sending" });
      this.setState({ step: 2 });
      console.log("values.status: ", values.status);
      // localStorage.setItem("registration", registration);
      // localStorage.setItem("email", email);
      // setStatus("Sending...");

      let details = {
        registration: values.registration,
        mileage: values.mileage,
        tel: values.tel,
        // email: values.email,
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
        // narsomhelst: values.narsomhelst,
        // onetwoweeks: values.onetwoweeks,
        // threefourweeks: values.threefourweeks,
        // hitta: values.hitta,
        // price: values.price
      };
      let response = await fetch("http://vast-mesa-43641.herokuapp:5000/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      // setStatus("Submit");
      this.setState({ status: "Submit" });
      let result = await response.json();
      alert(result.status);
      console.log("result.status:", result.status);
    };

    switch (step) {
      case 1:
        return (
          <PersonalInformation
            nextStep={this.nextStep}
            values={values}
            handleChange={this.handleChange}
            handleSubmit={handleSubmit}
            onClick={this.handleButton}
            // onSubmit={handleSubmit}
          />
        );
      case 2:
        return <Success />;
      default:
        // Do nothing
        console.log("MultiStep form built with React.");
    }
  }
}
