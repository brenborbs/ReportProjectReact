import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumbs } from "react-breadcrumbs-dynamic";
import Layout from "./hoc/Layout";

// Routes
import Routes from "./Routes";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <div className="m-4">
          <Breadcrumbs
            separator={<b> / </b>}
            item={NavLink}
            finalItem={"b"}
            finalProps={{
              style: { color: "red" }
            }}
          />
          <hr />
        </div>
        <Routes />
      </Layout>
    );
  }
}
