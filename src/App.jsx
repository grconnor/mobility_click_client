// Library Imports:
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Component Imports:
import Main from "./components/Main/Main";
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
            <Route exact path="/vardera-din-bil" component={MultiStepForm} />
          </Switch>
        {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
