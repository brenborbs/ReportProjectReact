import React, { Component } from "react";
import Navbar from "../components/Navbar/Header";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <>{this.props.children}</>
      </>
    );
  }
}
