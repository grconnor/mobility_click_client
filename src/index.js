import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactGA from "react-ga";
import ReactDOM from "react-dom";

// ReactGA.pageview(window.location.pathname + window.location.search);

export const initGA = () => {
	ReactGA.initialize(process.env.REACT_APP_GA_KEY_1);
	ReactGA.initialize(process.env.REACT_APP_GA_KEY_2);
};

export const GaPageView = (page) => {
  ReactGA.pageview(page);
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
