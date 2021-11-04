import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactGA from "react-ga";
import ReactDOM from "react-dom";

ReactGA.initialize("G-VPXRXJQFWF");
// ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
