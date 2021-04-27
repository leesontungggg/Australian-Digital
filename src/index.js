import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product

const LandingPage = React.lazy(() =>
  import("views/LandingPage/LandingPage.js")
);
const AboutPage = React.lazy(() => import("views/AboutPage/AboutPage.js"));
const ServicePage = React.lazy(() =>
  import("views/ServicePage/ServicePage.js")
);
const PortfolioPage = React.lazy(() =>
  import("views/PortfolioPage/PortfolioPage.js")
);
const ContactPage = React.lazy(() =>
  import("views/ContactPage/ContactPage.js")
);

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/service" component={ServicePage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Suspense>
  </Router>,
  document.getElementById("root")
);
