// Library Imports:
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Component Imports:
import HIW from "./components/HIW/HIW";
import Main from "./components/Main/Main";
import FAQ from './components/FAQ/FAQMain';
import OmOss from "./components/OmOss/OmOss";
import Footer from "./components/Footer/Footer";
import MultiStepForm from "./components/MultistepForm/Form";
import NavigationBar from "./components/NavigationBar/NavigationBar";


// Image Imports:

const App = () => {
  return (
    <>
        <BrowserRouter>
        <NavigationBar />
          <Switch>
            <div className="flexbox-content-wrapper">
              <Route exact path="/" component={Main} />
              <Route exact path="/om-oss" component={OmOss} />
              <Route exact path="/vardera-din-bil" component={MultiStepForm} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact path="/hur-fungera-det" component={HIW} />
            </div>
          </Switch>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App;
