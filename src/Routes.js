import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";

// components
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Report from "./pages/Report";
import Signin from "./pages/Signin";

const Routes = () => {
  return (
    <main>
      <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/report" component={Report} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </main>
  );
};

export default Routes;
