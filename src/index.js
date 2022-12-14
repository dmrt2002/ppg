import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Home from "views/LandingPage/LandingPage.js";
import BookingPage from "views/BookingPage/BookingPage"
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/book" component={BookingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
