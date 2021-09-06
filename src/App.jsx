// Library Imports:
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Component Imports:
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
      <div className="flexbox-content-wrapper">
        <BrowserRouter>
        <NavigationBar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/om-oss" component={OmOss} />
            <Route exact path="/vardera-din-bil" component={MultiStepForm} />
            <Route exact path="/faq" component={FAQ} />
          </Switch>
        <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
