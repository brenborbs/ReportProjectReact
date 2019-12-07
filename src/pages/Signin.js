import React, { Component } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

export default class Signin extends Component {
  render() {
    return (
      <div className="container">
        <BreadcrumbsItem to="/signin">Signin</BreadcrumbsItem>
        <div className="row">
          <div className="col">
            <div className="signin-wrapper">
              <div className="signin-title">
                <h1>Login</h1>
              </div>
              <form>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
