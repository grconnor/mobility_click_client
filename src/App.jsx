// Library Imports:
import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Component Imports:
// import HoverableDiv from "./components/HoverableDiv/HoverableDiv";
import HIW from "./components/HIW/HIW";
import MainNew from "./components/Main/MainNew";
import FAQ from "./components/FAQ/FAQMain";
import OmOss from "./components/OmOss/OmOss";
import Footer from "./components/Footer/Footer";
import MultiStepForm from "./components/MultistepForm/Form";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { GaPageView, initGA } from ".";

// Image Imports:

const App = () => {
	useEffect(() => {
		initGA();
		GaPageView("App");
	}, []);
	return (
		<>
			<BrowserRouter>
				<NavigationBar />
				<Switch>
					<div className="flexbox-content-wrapper-bypass">
						<div className="flexbox-content-wrapper">
							<Route exact path="/" component={MainNew} />
							<Route exact path="/om-oss" component={OmOss} />
							<Route exact path="/vardera-din-bil" component={MultiStepForm} />
							<Route exact path="/faq" component={FAQ} />
							<Route exact path="/hur-fungera-det" component={HIW} />
						</div>
					</div>
				</Switch>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
