import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import AboutPage from "views/AboutPage/AboutPage.js";
import ServicePage from "views/ServicePage/ServicePage.js";
import PortfolioPage from "views/PortfolioPage/PortfolioPage.js";
import ContactPage from "views/ContactPage/ContactPage";



var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/service" component={ServicePage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contact" component={ContactPage} />

      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
