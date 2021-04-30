import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Error.module.scss";

class Error extends Component {
  render() {
    return (
      <div className={classes.Error}>
        <h1>Oops!</h1>
        <p>Something went wrong</p>
        <p>
          <Link to="/">Go back to home</Link>
        </p>
      </div>
    );
  }
}

export default Error;
