// Library Imports:
import React from "react";
// import ReactGA from "react-ga";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Component Imports:
import HIW from "./components/HIW/HIW";
import MainNew from "./components/Main/MainNew";
import FAQ from "./components/FAQ/FAQMain";
import OmOss from "./components/OmOss/OmOss";
import Footer from "./components/Footer/Footer";
import MultiStepForm from "./components/MultistepForm/Form";
import HoverableDiv from "./components/HoverableDiv/HoverableDiv";
import NavigationBar from "./components/NavigationBar/NavigationBar";

// Image Imports:

const App = () => {
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
              {/* <Route exact path="/hoverable-div" component={HoverableDiv} /> */}
            </div>
          </div>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
